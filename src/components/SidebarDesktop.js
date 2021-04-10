import React from "react";

const SidebarDesktop = () => {
 
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
        <div className="flex items-center flex-shrink-0 px-6">
          <h4 className="font-bold text-xl">DC Crypto Club</h4>
        </div>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          Side bar component - user account dropdown, search, navigation
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;