import React, { useState } from "react";
import MobileHeaderUserDropdown from './MobileHeaderUserDropdown';
import OffCanvasMenu from './OffCanvasMenu';

const SnapshotMobileHeader = () => {             
  // Mobile header - menu icon with off canvas menu, avatar with dropdown

  // Two open states as a hack way to deal with closing transition timing
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDelay, setIsOpenDelay] = useState(false)

  const openMenu = () => {
    setIsOpen(true);    
    isOpenDelay(true);    
  }

  function handleCloseButtonClick() {
    setIsOpen(false);
    setTimeout(() => {
      isOpenDelay(false);
    }, 300)
  }

  return (
    <>
      { isOpenDelay && (
        <OffCanvasMenu open={isOpen} onCloseButtonClick={handleCloseButtonClick}></OffCanvasMenu> 
      )}      
      <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
        <button onClick={() => openMenu()} className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden">
          <span className="sr-only">Open sidebar</span>      
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <div className="flex-1 flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex font-bold text-2xl">Crypto Club</div>
          <div className="flex items-center">          
            <MobileHeaderUserDropdown></MobileHeaderUserDropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnapshotMobileHeader;