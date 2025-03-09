
interface RecipeInstructionsProps {
  instructions: string[];
}

const RecipeInstructions = ({ instructions }: RecipeInstructionsProps) => {
  if (!instructions || instructions.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Directions:</h2>
      <ol className="space-y-6 list-decimal list-inside">
        {instructions.map((step, idx) => (
          <li key={idx} className="text-gray-700">
            <span className="font-semibold text-lg text-coral-600 mr-2">Step {idx + 1}</span>
            <p className="mt-1 ml-7">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeInstructions;
