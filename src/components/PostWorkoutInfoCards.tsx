
import { Card } from "@/components/ui/card";
import { HeartPulse, Clock, Dumbbell } from "lucide-react";

const PostWorkoutInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card className="bg-gradient-to-br from-lavender-50 to-lavender-100 p-6 border-0 shadow-md rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-lavender-500 rounded-full p-2 text-white">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg">30-Minute Window</h3>
        </div>
        <p className="text-gray-700">Consume within 30 minutes after your workout to optimize recovery and nutrient absorption.</p>
      </Card>
      
      <Card className="bg-gradient-to-br from-mint-50 to-mint-100 p-6 border-0 shadow-md rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-mint-500 rounded-full p-2 text-white">
            <Dumbbell className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg">Protein Rich</h3>
        </div>
        <p className="text-gray-700">High-quality protein helps repair muscle tissue and supports growth after intense exercise.</p>
      </Card>
      
      <Card className="bg-gradient-to-br from-coral-50 to-coral-100 p-6 border-0 shadow-md rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-coral-500 rounded-full p-2 text-white">
            <HeartPulse className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-lg">Recovery Boost</h3>
        </div>
        <p className="text-gray-700">These smoothies contain ingredients that reduce inflammation and speed up recovery time.</p>
      </Card>
    </div>
  );
};

export default PostWorkoutInfoCards;
