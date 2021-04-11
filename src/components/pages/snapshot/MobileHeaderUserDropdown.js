import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { useAuth0 } from "@auth0/auth0-react";

const MobileHeaderUserDropdown = (props) => {
  const { logout } = useAuth0();

  return (
    <div className="flex items-center justify-center">
      <div className="flex-grow relative">
        <Menu>
          {({ open }) => (
            <div className="w-full">
              <span className="rounded-md shadow-sm">
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={props.user.picture} alt={props.user.name} />          
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
                          } flex flex-col w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <span class="font-medium inline">Sign out</span> <div>{props.user.name}</div>
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

export default MobileHeaderUserDropdown;