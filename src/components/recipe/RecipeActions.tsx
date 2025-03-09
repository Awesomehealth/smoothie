
import { Heart, Printer, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeActionsProps {
  onSaveRecipe: () => void;
  onPrintRecipe: () => void;
  onEmailRecipe: () => void;
  onTextIngredients: () => void;
}

const RecipeActions = ({ 
  onSaveRecipe, 
  onPrintRecipe, 
  onEmailRecipe, 
  onTextIngredients 
}: RecipeActionsProps) => {
  return (
    <div className="mt-10 px-6">
      <Button 
        variant="black"
        className="w-full h-12 rounded-full mb-4"
        onClick={onSaveRecipe}
      >
        <Heart className="mr-2 h-5 w-5" /> Save Recipe
      </Button>
      
      <div className="flex justify-between gap-4">
        <Button variant="outline" className="flex-1" onClick={onPrintRecipe}>
          <Printer className="mr-2 h-4 w-4" /> Print
        </Button>
        <Button variant="outline" className="flex-1" onClick={onEmailRecipe}>
          <Mail className="mr-2 h-4 w-4" /> Email
        </Button>
        <Button variant="outline" className="flex-1" onClick={onTextIngredients}>
          <MessageSquare className="mr-2 h-4 w-4" /> Text
        </Button>
      </div>
    </div>
  );
};

export default RecipeActions;
