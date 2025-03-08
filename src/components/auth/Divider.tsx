
import React from "react";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <div className="w-full flex items-center justify-center mb-6">
      <div className="border-t border-gray-200 w-full"></div>
      <span className="text-gray-500 text-sm px-2">{text}</span>
      <div className="border-t border-gray-200 w-full"></div>
    </div>
  );
};

export default Divider;
