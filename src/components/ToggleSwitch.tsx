
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

interface ToggleSwitchProps {
  label: string;
  onChange: (isChecked: boolean) => void;
  defaultChecked?: boolean;
}

const ToggleSwitch = ({ label, onChange, defaultChecked = false }: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <div className="flex items-center justify-between space-x-4 rounded-lg bg-white/60 backdrop-blur-sm p-3 border border-gray-100 shadow-sm">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <Switch 
        checked={isChecked} 
        onCheckedChange={handleToggle}
        className={isChecked ? "bg-coral-400" : "bg-gray-200"}
      />
    </div>
  );
};

export default ToggleSwitch;
