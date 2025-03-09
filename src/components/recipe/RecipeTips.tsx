
import { Card } from "@/components/ui/card";

interface RecipeTipsProps {
  tips: string[];
}

const RecipeTips = ({ tips }: RecipeTipsProps) => {
  if (!tips || tips.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 px-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recipe Tips:</h2>
      <Card className="p-4 bg-mint-50">
        <ul className="space-y-3">
          {tips.map((tip, idx) => (
            <li key={idx} className="flex items-start space-x-3">
              <span className="text-mint-600 font-semibold">•</span>
              <p className="text-gray-700">{tip}</p>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default RecipeTips;
