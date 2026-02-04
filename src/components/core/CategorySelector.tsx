import React from "react";
import {
  CATEGORIES,
  getCategoriesWithWordCount,
  type Category,
} from "@/constants/wordBank";

interface CategorySelectorProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  onContinue: () => void;
  onBack?: () => void;
  className?: string;
}

const CategorySelector = ({
  selectedCategory,
  onCategoryChange,
  onContinue,
  onBack,
  className = "",
}: CategorySelectorProps) => {
  const categoriesWithCount = getCategoriesWithWordCount();

  const getCategoryColorClasses = (color: string, isSelected: boolean) => {
    const colorMap = {
      slate: isSelected
        ? "bg-slate-500 text-white border-slate-500"
        : "bg-slate-50 text-slate-700 border-slate-200",
      emerald: isSelected
        ? "bg-emerald-500 text-white border-emerald-500"
        : "bg-emerald-50 text-emerald-700 border-emerald-200",
      green: isSelected
        ? "bg-green-500 text-white border-green-500"
        : "bg-green-50 text-green-700 border-green-200",
      orange: isSelected
        ? "bg-orange-500 text-white border-orange-500"
        : "bg-orange-50 text-orange-700 border-orange-200",
      blue: isSelected
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-blue-50 text-blue-700 border-blue-200",
      purple: isSelected
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-blue-50 text-blue-700 border-blue-200",
      cyan: isSelected
        ? "bg-cyan-500 text-white border-cyan-500"
        : "bg-cyan-50 text-cyan-700 border-cyan-200",
      pink: isSelected
        ? "bg-pink-500 text-white border-pink-500"
        : "bg-pink-50 text-pink-700 border-pink-200",
      red: isSelected
        ? "bg-red-500 text-white border-red-500"
        : "bg-red-50 text-red-700 border-red-200",
      yellow: isSelected
        ? "bg-yellow-500 text-white border-yellow-500"
        : "bg-yellow-50 text-yellow-700 border-yellow-200",
    };

    return colorMap[color as keyof typeof colorMap] || colorMap.slate;
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center px-2 py-4">
      <div className="max-w-5xl w-full">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-6">
          {onBack && (
            <div className="text-left mb-4">
              <button
                onClick={onBack}
                className="inline-flex items-center text-sm text-slate-600 hover:text-slate-800 
                           transition-colors duration-200 px-2 py-1 active:scale-95"
              >
                Back
              </button>
            </div>
          )}

          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 px-2">
              Choose a Category
            </h3>
            <p className="text-sm sm:text-base text-slate-600 px-2">
              Select a word category to focus your practice
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {categoriesWithCount.map((category) => {
              const isSelected = selectedCategory === category.id;
              const colorClasses = getCategoryColorClasses(
                category.color,
                isSelected,
              );

              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200
                    text-center hover:scale-105 hover:shadow-md active:scale-95
                    ${colorClasses}
                  `}
                >
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">
                    {category.icon}
                  </div>
                  <div className="font-semibold text-xs sm:text-sm mb-1">
                    {category.name}
                  </div>
                  <div
                    className={`text-xs ${isSelected ? "text-white/80" : "text-slate-500"}`}
                  >
                    {category.wordCount} words
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-slate-100 rounded-lg">
              <span className="text-xl sm:text-2xl mr-2">
                {CATEGORIES[selectedCategory].icon}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2">
                <span className="text-slate-700 font-medium text-sm sm:text-base">
                  {CATEGORIES[selectedCategory].name}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm">
                  {CATEGORIES[selectedCategory].description}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 
                         text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl
                         transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Continue with {CATEGORIES[selectedCategory].name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
