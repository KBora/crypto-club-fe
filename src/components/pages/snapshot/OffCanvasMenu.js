import { Transition } from "@headlessui/react";
import React, { useEffect, useState }  from "react";


const OffCanvasMenu = (props) => {
  // TODO: Make esc close 
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    setIsOpen(props.open);
  }, [props])

  return (
    <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
        <Transition
          show={isOpen}
          className="w-full">
          {/* Background overlay */}
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />
            </Transition.Child>

            {/* Off canvas menu*/}
            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white h-screen">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button onClick={props.onCloseButtonClick}  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close sidebar</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-shrink-0 flex items-center px-4">
                  <div className="text-2xl font-extrabold">Crypto Club</div>
                </div>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2">
                    <div className="space-y-1">                    
                      <a href="#home" className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md" aria-current="page">
                        <svg className="text-gray-500 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </Transition.Child>
        </Transition>    

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
  );
};

export default OffCanvasMenu;