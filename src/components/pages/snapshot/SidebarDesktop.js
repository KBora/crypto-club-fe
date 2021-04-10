import React from "react";
import SidebarDesktopDropdown from "./SidebarDesktopDropdown";

const SidebarDesktop = () => {

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
        <div className="flex items-center flex-shrink-0 px-6">
          <h4 className="font-bold text-xl">Crypto Club</h4>
        </div>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <div className="px-3 mt-6 relative inline-block text-left">
            <SidebarDesktopDropdown></SidebarDesktopDropdown>
          </div>

          <nav className="px-3 mt-6">
            <div className="space-y-1">            
              <a href="#home" className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md" aria-current="page">
                <svg className="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>

            </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;