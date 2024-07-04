"use client";
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-white mt-8  ">
        {({ open }) => (
          <>
            <div className=" mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex  items-center justify-between">
                <div className="flex items-center justify-center gap-4 px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-50"
                      src="https://reveza.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8mv3taq0%2Fproduction%2F0383ea780026261f55d344233561dd76a5561f8a-260x70.png&w=384&q=75"
                      alt="Your Company"
                    />
                  </div>
                  <div className=" hidden lg:ml-6 lg:flex gap-4">
                    <div className="space-x-4 bg-blue-10 lg:p-7 rounded">
                      {/* Current: "bg-gray-900 text-white", Default: "text-white hover:bg-gray-700 hover:text-white" */}
                      <Link
                        href="/platform"
                        className="rounded-md  px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        Platform
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        Solution
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        Industries
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        RES
                      </Link>
                      <Link
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        Resources
                      </Link>

                      <Link
                        href="#"
                        className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                      >
                        Contact us
                      </Link>
                    </div>
                    <div className="bg-bgblue-20 rounded flex justify-center items-center ">
                      <Link
                        href="#"
                        className="rounded-md text-white px-3 py-2 text-sm font-medium text-white "
                      >
                        Request For Demo
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="hidden lg:ml-4 lg:block"></div>
              </div>
            </div>
            {/* hidden when click on toggle */}
            <DisclosurePanel className="lg:hidden pt-5 w-[80%] m-auto ">
              <div className="space-y-1 px-2 pb-3 pt-2 bg-blue-10 text-center rounded-md">
                {/* Current: "bg-gray-900 text-white", Default: "text-white hover:bg-gray-700 hover:text-white" */}
                <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md  px-3 py-2 text-sm font-normal text-white border-b-2 rounded-none "
                >
                  Platform
                </DisclosureButton>
                <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white border-b-2 rounded-none"
                >
                  Solution
                </DisclosureButton>
                <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white border-b-2 rounded-none"
                >
                  Industries
                </DisclosureButton>
                <DisclosureButton
                  as="Link"
                  href="#" 
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white border-b-2 rounded-none"
                >
                  RES
                </DisclosureButton>
                <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white border-b-2 rounded-none"
                >
                  Resources
                </DisclosureButton>
                <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white rounded-none"
                >
                  About Us
                </DisclosureButton>
                {/* <DisclosureButton
                  as="Link"
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white  rounded-none"
                >
                  Request For Demo
                </DisclosureButton> */}
              </div>
              <button  className="block rounded-md px-3 py-2 text-sm font-normal text-white hover:bg-gray-700 hover:text-white  rounded-md  w-full bg-bgblue-20 mt-2">Request For Demo </button>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
