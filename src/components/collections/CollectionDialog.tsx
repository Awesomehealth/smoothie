
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { Collection } from "@/types/collection-types";
import CreateCollection from "./CreateCollection";
import CollectionList from "./CollectionList";

interface CollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  smoothieId: string;
  smoothieName: string;
}

const CollectionDialog = ({ isOpen, onClose, smoothieId, smoothieName }: CollectionDialogProps) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && user) {
      fetchUserCollections();
    }
  }, [isOpen, user]);

  const fetchUserCollections = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Apply type assertion to the entire query chain
      const result = await supabase
        .from('collections')
        .select('*')
        .eq('user_id', user.id);
      
      // Cast the result to the expected type
      const { data, error } = result as unknown as { 
        data: Collection[] | null; 
        error: Error | null 
      };
      
      if (error) throw error;
      setCollections(data || []);
    } catch (error) {
      console.error("Error fetching collections:", error);
      toast({
        title: "Error",
        description: "Failed to load your collections",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCollection = (newCollection: Collection) => {
    setCollections([...collections, newCollection]);
    setSelectedCollectionId(newCollection.id);
  };

  const handleSaveToCollection = async () => {
    if (!selectedCollectionId || !user) return;
    
    setIsLoading(true);
    try {
      // Apply type assertion to the entire query chain
      const result = await supabase
        .from('collection_items')
        .insert([{ 
          collection_id: selectedCollectionId, 
          smoothie_id: smoothieId,
          user_id: user.id
        }]);
      
      // Cast the result to the expected type
      const { error } = result as unknown as {
        error: { code: string } | null
      };
      
      if (error) {
        // Check if it's a duplicate error
        if (error.code === '23505') {
          toast({
            description: `${smoothieName} is already in this collection`,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Saved",
          description: `${smoothieName} added to collection`,
        });
        onClose();
      }
    } catch (error) {
      console.error("Error saving to collection:", error);
      toast({
        title: "Error",
        description: "Failed to save to collection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-6">
        <DialogHeader>
          <DialogTitle className="text-xl">Save to Collection</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <CreateCollection 
            onCollectionCreated={handleAddCollection} 
            userId={user?.id} 
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          
          <CollectionList 
            collections={collections} 
            isLoading={isLoading} 
            selectedCollectionId={selectedCollectionId}
            setSelectedCollectionId={setSelectedCollectionId}
          />
        </div>
        
        <div className="flex justify-end mt-6 space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSaveToCollection}
            disabled={!selectedCollectionId || isLoading}
            className="bg-coral-500 hover:bg-coral-600 text-white"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollectionDialog;
