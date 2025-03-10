import * as LucideIcons from "lucide-react";

export const DynamicIcon = ({ iconName, className = "text-black" }) => {
  const LucideIcon = LucideIcons[iconName];

  if (!LucideIcon) {
    return <span>I</span>;
  }

  return <LucideIcon className={className} />;
};