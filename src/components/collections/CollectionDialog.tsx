
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Check, Folder } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { Collection } from "@/types/collection-types";

interface CollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  smoothieId: string;
  smoothieName: string;
}

const CollectionDialog = ({ isOpen, onClose, smoothieId, smoothieName }: CollectionDialogProps) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [isCreatingNew, setIsCreatingNew] = useState(false);
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
      // Use type assertion to handle the Supabase query
      const { data, error } = await supabase
        .from('collections' as any)
        .select('*')
        .eq('user_id', user.id);
      
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

  const handleCreateCollection = async () => {
    if (!newCollectionName.trim() || !user) return;
    
    setIsLoading(true);
    try {
      // Use type assertion to handle the Supabase query
      const { data, error } = await supabase
        .from('collections' as any)
        .insert([{ name: newCollectionName, user_id: user.id }])
        .select()
        .single();
      
      if (error) throw error;
      
      // Add null check for data
      if (data) {
        setCollections([...collections, data as Collection]);
        setNewCollectionName("");
        setIsCreatingNew(false);
        setSelectedCollectionId(data.id);
        
        toast({
          title: "Success",
          description: `Collection "${newCollectionName}" created`,
        });
      }
    } catch (error) {
      console.error("Error creating collection:", error);
      toast({
        title: "Error",
        description: "Failed to create collection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveToCollection = async () => {
    if (!selectedCollectionId || !user) return;
    
    setIsLoading(true);
    try {
      // Use type assertion to handle the Supabase query
      const { error } = await supabase
        .from('collection_items' as any)
        .insert([{ 
          collection_id: selectedCollectionId, 
          smoothie_id: smoothieId,
          user_id: user.id
        }]);
      
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
          {isCreatingNew ? (
            <div className="flex items-center space-x-2 mb-4">
              <Input
                placeholder="Collection name"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleCreateCollection}
                disabled={!newCollectionName.trim() || isLoading}
              >
                Create
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsCreatingNew(false)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button 
              className="w-full mb-4 flex items-center justify-center"
              variant="outline"
              onClick={() => setIsCreatingNew(true)}
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Collection
            </Button>
          )}
          
          {isLoading && collections.length === 0 ? (
            <div className="py-8 text-center text-gray-500">Loading collections...</div>
          ) : collections.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              You don't have any collections yet. Create your first one!
            </div>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto p-1">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className={`flex items-center justify-between p-3 rounded-md cursor-pointer ${
                    selectedCollectionId === collection.id 
                      ? 'bg-mint-50 border border-mint-200' 
                      : 'hover:bg-gray-50 border border-gray-100'
                  }`}
                  onClick={() => setSelectedCollectionId(collection.id)}
                >
                  <div className="flex items-center">
                    <Folder className="mr-2 h-5 w-5 text-gray-400" />
                    <span>{collection.name}</span>
                  </div>
                  {selectedCollectionId === collection.id && (
                    <Check className="h-5 w-5 text-mint-500" />
                  )}
                </div>
              ))}
            </div>
          )}
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
