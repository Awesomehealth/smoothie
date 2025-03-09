
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFoundContent = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
      <p className="mb-6">We couldn't find the recipe you're looking for.</p>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundContent;
