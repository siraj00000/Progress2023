"use client";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  UserIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import CargoLogo from "@/public/CargoLogo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact-us" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  {
    /* Get the current route */
  }
  const currentRoute = usePathname();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex h-16 items-center justify-between">
              {/* Left Align Button :Mobile View */}
              <div className="absolute inset-y-0 left-0 md:hidden flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
                <button
                  type="button"
                  className="rounded-full p-1 text-secondary"
                >
                  <span className="sr-only">View notifications</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full p-1 text-secondary mr-2"
                >
                  <span className="sr-only">View notifications</span>
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navbar Hamburger and Close Icon :Mobile View */}
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#091E31] hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
      
              {/* Logo and menu list :Desktop View */}
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start lg:gap-28 md:gap-12 gap-5">
                <Link href={"/"} className="flex flex-shrink-0 items-center">
                  <Image
                    className="block w-auto h-auto lg:hidden"
                    width={132}
                    height={24}
                    src={CargoLogo}
                    alt="Cargo Navbar Logo"
                    priority
                  />
                  <Image
                    className="w-auto h-auto hidden lg:block"
                    src={CargoLogo}
                    alt="Cargo Navbar Logo"
                    priority
                  />
                </Link>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={classNames(
                          currentRoute === item.href
                            ? "text-activeTab"
                            : "text-secondary",
                          "rounded-md lg:px-3 py-2 md:text-14 text-12 leading-24 font-nunito700"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Align Buttons Desktop View */}
              <div className="absolute inset-y-0 right-0 hidden md:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
                <button
                  type="button"
                  className="rounded-full p-1 text-secondary"
                >
                  <span className="sr-only">View notifications</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="rounded-full p-1 text-secondary mr-2"
                >
                  <span className="sr-only">View notifications</span>
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Link
                  href={"/contact-us"}
                  className=" p-2 px-3 rounded-xl text14 font-nunito700 text-secondary shadow-shadowGray shadow-md border border-transparent bg-white"
                >
                  Reques a demo
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile View Menu List */}
          <Disclosure.Panel className="md:hidden pb-10">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    currentRoute === item.href
                      ? "text-activeTab"
                      : "text-secondary",
                    "block rounded-md px-3 py-2 text-14 leading-24 font-nunito700"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <Link href="/contact-us" className="ml-5 mb-2 p-2 px-3 rounded-xl text14 font-nunito700 text-secondary shadow-shadowGray shadow-xl border border-transparent bg-white">
              Reques a demo
            </Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
