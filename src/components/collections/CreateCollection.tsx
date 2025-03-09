
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { Collection } from "@/types/collection-types";

interface CreateCollectionProps {
  onCollectionCreated: (collection: Collection) => void;
  userId?: string;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const CreateCollection = ({ onCollectionCreated, userId, isLoading, setIsLoading }: CreateCollectionProps) => {
  const [newCollectionName, setNewCollectionName] = useState("");
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const handleCreateCollection = async () => {
    if (!newCollectionName.trim() || !userId) return;
    
    setIsLoading(true);
    try {
      // Use type assertion to bypass TypeScript errors
      const { data, error } = await (supabase
        .from('collections') as any)
        .insert([{ name: newCollectionName, user_id: userId }])
        .select()
        .single();
      
      if (error) throw error;
      
      if (data) {
        onCollectionCreated(data as Collection);
        setNewCollectionName("");
        setIsCreatingNew(false);
        
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

  if (isCreatingNew) {
    return (
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
    );
  }

  return (
    <Button 
      className="w-full mb-4 flex items-center justify-center"
      variant="outline"
      onClick={() => setIsCreatingNew(true)}
    >
      <Plus className="mr-2 h-4 w-4" /> Create New Collection
    </Button>
  );
};

export default CreateCollection;
