import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import * as React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../svg/logo";

interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] | [] = [
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
  // { name: 'Contact', href: '#' },
];

export function Nav(): JSX.Element {
  return (
    <Popover>
      {({ open }) => (
        <>
          <nav
            className="relative flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/" className="inline-flex items-center space-x-4">
                  <Logo className="w-auto h-8 text-teal-600 sm:h-10 dark:text-orange-400" />
                  <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Luke Bennett</span>
                </Link>
                {navigation.length > 0 ? (
                  <div className="flex items-center -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out bg-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:bg-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:focus:ring-orange-400">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="hidden text-right md:block md:ml-10">
              <div className="md:space-x-10">
                {navigation.map((item: NavItem) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:underline"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <MobileMenu open={open} />
        </>
      )}
    </Popover>
  );
}

interface MobileMenuProps {
  open: boolean;
}

function MobileMenu({ open }: MobileMenuProps): JSX.Element {
  return (
    <Transition
      show={open}
      as={React.Fragment}
      enter="duration-150 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform-gpu md:hidden"
      >
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <Logo aria-hidden className="w-auto h-8 text-teal-600 dark:text-orange-400" />
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out bg-white rounded-md dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:bg-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:focus:ring-orange-400">
                <span className="sr-only">Close main menu</span>
                <XIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item: NavItem) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md dark:text-gray-300 hover:text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}
