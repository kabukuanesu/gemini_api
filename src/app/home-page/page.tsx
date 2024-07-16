"use client";
import * as React from "react";
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FiberPinIcon from "@mui/icons-material/FiberPin";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NavBar from "@/app/nav-bar/nav-bar";
import SimCardIcon from "@mui/icons-material/SimCard";
import PaymentIcon from "@mui/icons-material/Payment";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import InventoryIcon from "@mui/icons-material/Inventory";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BuildIcon from "@mui/icons-material/Build";
import SmsIcon from "@mui/icons-material/Sms";
import styles from "@/app/global-styles/styles.global.module.css";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage() {
  const portalTabs = [
    {
      title: "Overview",
      description: "Application Overview",
      icon: <AccountBalanceIcon className={styles.iconStyles} />,
      path: "/overview",
    },
    {
      title: "Upload Image",
      description: "Detect Lesions Type",
      icon: <CameraAltIcon className={styles.iconStyles} />,
      path: "/gemini-vision",
    },
    {
      title: "Diagnosis",
      description: "Uploaded Image Analysis",
      icon: <FiberPinIcon className={styles.iconStyles} />,
      path: "/gemini-vision",
    },
    {
      title: "Symptoms Checker",
      description: "Skin Issues",
      icon: <SimCardIcon className={styles.iconStyles} />,
      path: "/gemini-chat",
    },
    {
      title: "Ask Anything",
      description: "ChatBot",
      icon: <SimCardIcon className={styles.iconStyles} />,
      path: "/gemini-chatting",
    },

    {
      title: "Skin Health Library",
      description: "Learn More",
      icon: <InventoryIcon className={styles.iconStyles} />,
      path: "/library",
    },
    {
      title: "My History",
      description: "Past Diagnosis",
      icon: <MoveDownIcon className={styles.iconStyles} />,
      path: "/history",
    },
    {
      title: "Notifications",
      description: "Reminder",
      icon: <StorefrontIcon className={styles.iconStyles} />,
      path: "/reminder",
    },
    {
      title: "Profile",
      description: "My Information",
      icon: <PaymentIcon className={styles.iconStyles} />,
      path: "/profile",
    },
    {
      title: "Help & Support",
      description: "Customer Support",
      icon: <PriceChangeIcon className={styles.iconStyles} />,
      path: "/support",
    },
    {
      title: "Settings",
      description: "Your Preferences",
      icon: <BuildIcon className={styles.iconStyles} />,
      path: "/settings",
    },
    {
      title: "Community Forum",
      description: "Support Each Other",
      icon: <SmsIcon className={styles.iconStyles} />,
      path: "/community",
    },
  ];

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src={user.imageUrl}
                          className="h-8 w-8 rounded-full"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>

      <NavBar pageName={"Home"} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 drop-shadow-md">
        {/* Using map function to iterate over the data array */}
        {portalTabs.map((item) => (
          <Link href={item.path} key={item.title}>
            <div className="relative">
              <div className={"h-5"}></div>
              <div className="static bg-white shadow-2xl h-24 rounded-2xl">
                <div
                  className={
                    "rounded-2xl h-14 text-white content-end grid grid-cols-2"
                  }
                >
                  <div className={""}></div>
                </div>
                <div className="absolute top-0 left-0 h-12 w-12 rounded-2xl ml-5 px-3 py-3 bg-gradient-to-r from-green-600 to-green-400 text-white">
                  {item.icon}
                </div>
                <div className="grid grid-cols-1 divide-y">
                  <div className={"absolute left-0 bottom-4 pl-2"}>
                    <div className={"font-bold text-gray-600"}>
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div
        id="bottom-banner"
        tabIndex={-1}
        className="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center">
              <svg
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Discount</span>
            </span>
            <span>
              <b>So this is me trying to craft a dashboard.</b>{" "}
              <a
                href="/home-page"
                className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline"
              >
                Lets see how it will end up{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
