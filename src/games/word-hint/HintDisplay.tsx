import React from "react";

interface HintDisplayProps {
  hint: string;
}

const HintDisplay = ({ hint }: HintDisplayProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold text-blue-800 mb-2">
        Hint:
      </h3>
      <p className="text-sm sm:text-base text-blue-700">{hint}</p>
    </div>
  );
};

export default HintDisplay;
