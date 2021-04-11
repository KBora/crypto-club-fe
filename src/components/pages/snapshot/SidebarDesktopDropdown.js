import React from "react";
import { Menu, Transition } from '@headlessui/react'
import Avatar from "../../ui-elements/Avatar";
import { useAuth0 } from "@auth0/auth0-react";

const SidebarDesktopDropdown = (props) => {
  const { logout } = useAuth0();

  return (
    <div className="flex items-center justify-center">
      <div className="flex-grow relative">
        <Menu>
          {({ open }) => (
            <div className="w-full">
              <span className="rounded-md shadow-sm">
                <Menu.Button className="inline-flex justify-center group w-full bg-white rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">                  
                  <span className="flex w-full justify-between items-center">
                      <span className="flex min-w-0 items-center justify-between space-x-3">
                        <Avatar user={props.user} showName={true}></Avatar>
                      </span>
                      <svg className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                  </span>
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >

                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => logout({ returnTo: window.location.origin })}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Sign out
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default SidebarDesktopDropdown;