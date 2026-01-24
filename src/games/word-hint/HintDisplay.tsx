
import React from 'react';

interface HintDisplayProps {
  hint: string;
}

const HintDisplay = ({ hint }: HintDisplayProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Hint:</h3>
      <p className="text-blue-700">{hint}</p>
    </div>
  );
};

export default HintDisplay;
