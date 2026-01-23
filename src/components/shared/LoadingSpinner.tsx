
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 p-12">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 rounded-full border-4 border-slate-200"></div>
            {/* Inner spinning ring */}
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
          </div>
          <div className="mt-6 text-slate-600 font-medium animate-pulse text-center">
            Loading next word...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
