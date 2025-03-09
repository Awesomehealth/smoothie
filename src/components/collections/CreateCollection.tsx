
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCreateCollection = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollectionName.trim() || !userId) return;
    
    setIsLoading(true);
    try {
      // Using the type-bypassed supabase client
      const { data, error } = await supabase
        .from('collections')
        .insert({ name: newCollectionName, user_id: userId })
        .select();
      
      if (error) throw error;
      
      const newCollection = data?.[0];
      if (newCollection) {
        onCollectionCreated(newCollection);
        setNewCollectionName("");
        setIsExpanded(false);
        toast({
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

  if (!isExpanded) {
    return (
      <Button 
        variant="outline" 
        onClick={() => setIsExpanded(true)}
        className="w-full mb-4 border-dashed border-2 border-gray-300 text-gray-600 hover:text-coral-600 hover:border-coral-300"
        disabled={isLoading}
      >
        <Plus size={18} className="mr-2" /> Create new collection
      </Button>
    );
  }

  return (
    <form onSubmit={handleCreateCollection} className="mb-4">
      <div className="flex gap-2">
        <Input
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
          placeholder="Collection name"
          className="flex-1"
          disabled={isLoading}
          autoFocus
        />
        <Button 
          type="submit" 
          disabled={!newCollectionName.trim() || isLoading}
          className="bg-coral-500 hover:bg-coral-600 text-white"
        >
          Create
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => setIsExpanded(false)}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CreateCollection;
