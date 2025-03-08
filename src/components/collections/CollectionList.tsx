
import React from "react";
import { Check, Folder } from "lucide-react";
import { Collection } from "@/types/collection-types";

interface CollectionListProps {
  collections: Collection[];
  isLoading: boolean;
  selectedCollectionId: string | null;
  setSelectedCollectionId: (id: string) => void;
}

const CollectionList = ({ 
  collections, 
  isLoading, 
  selectedCollectionId, 
  setSelectedCollectionId 
}: CollectionListProps) => {
  if (isLoading && collections.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        Loading collections...
      </div>
    );
  }

  if (collections.length === 0) {
    return (
      <div className="py-8 text-center text-gray-500">
        You don't have any collections yet. Create your first one!
      </div>
    );
  }

  return (
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
  );
};

export default CollectionList;
