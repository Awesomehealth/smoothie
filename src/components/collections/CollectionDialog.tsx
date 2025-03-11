/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';
import { Collection } from '@/types/collection-types';
import CreateCollection from './CreateCollection';
import CollectionList from './CollectionList';
import LoginDialog from '@/components/auth/LoginDialog';

interface CollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  smoothieId: string;
  smoothieName: string;
}

const CollectionDialog = ({ isOpen, onClose, smoothieId, smoothieName }: CollectionDialogProps) => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (isOpen && user) {
      fetchCollections();
    }
  }, [isOpen, user]);

  const fetchCollections = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('collections')
        .select('*')
        .eq('user_id', user.id)
        .order('name');
      
      if (error) throw error;
      
      setCollections(data || []);
    } catch (error: any) {
      console.error('Error fetching collections:', error);
      toast({
        title: "Error",
        description: "Failed to load collections",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCollectionCreated = (newCollection: Collection) => {
    setCollections([...collections, newCollection]);
  };

  const handleAddToCollection = async (collectionId: string) => {
    if (!user) {
      setLoginDialogOpen(true);
      return;
    }
    
    setIsLoading(true);
    try {
      // Check if item already exists in collection
      const { data: existingItems, error: checkError } = await supabase
        .from('collection_items')
        .select('id')
        .match({ collection_id: collectionId, recipe_id: smoothieId });
      
      if (checkError) throw checkError;
      
      if (existingItems && existingItems.length > 0) {
        toast({
          description: `Recipe already in this collection`,
        });
      } else {
        // Add to collection
        const { error: insertError } = await supabase
          .from('collection_items')
          .insert({
            collection_id: collectionId,
            recipe_id: smoothieId,
            user_id: user.id
          });
        
        if (insertError) throw insertError;
        
        toast({
          description: `Added to collection`,
        });
      }
      
      onClose();
    } catch (error: any) {
      console.error('Error adding to collection:', error);
      toast({
        title: "Error",
        description: "Failed to add to collection",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Save to Collection</DialogTitle>
          </DialogHeader>
          
          {!user && (
            <div className="text-center py-6">
              <p className="mb-4">Please log in to save recipes to your collections</p>
              <button
                onClick={() => setLoginDialogOpen(true)}
                className="px-4 py-2 bg-awesome-green text-white rounded-lg"
              >
                Log In
              </button>
            </div>
          )}
          
          {user && (
            <>
              <CreateCollection 
                onCollectionCreated={handleCollectionCreated} 
                userId={user.id}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              
              <CollectionList
                collections={collections}
                onAddToCollection={handleAddToCollection}
                isLoading={isLoading}
                recipeName={smoothieName}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <LoginDialog 
        isOpen={loginDialogOpen} 
        onClose={() => setLoginDialogOpen(false)} 
      />
    </>
  );
};

export default CollectionDialog;
