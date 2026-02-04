import React from "react";
import { GameContainer } from "@/components/core";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-2 sm:p-4">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
        <GameContainer />

        {/* Copyright */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            © 2025 Windle. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
