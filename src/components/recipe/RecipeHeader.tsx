
import { Link } from "react-router-dom";
import { Share, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Smoothie } from "@/data/types";

interface RecipeHeaderProps {
  smoothie: Smoothie;
  onShareRecipe: () => void;
  onSaveRecipe: () => void;
}

const RecipeHeader = ({ smoothie, onShareRecipe, onSaveRecipe }: RecipeHeaderProps) => {
  return (
    <div className="flex justify-between items-center py-6 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{smoothie.name}</h1>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onShareRecipe}>
          <Share size={20} className="mr-2" /> Share
        </Button>
        <Button variant="outline" onClick={onSaveRecipe}>
          <Save size={20} className="mr-2" /> Save
        </Button>
      </div>
    </div>
  );
};

export default RecipeHeader;
