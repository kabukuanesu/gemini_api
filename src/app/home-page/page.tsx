"use client";
import * as React from "react";
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import FiberPinIcon from "@mui/icons-material/FiberPin";
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

export default function HomePage() {
  const portalTabs = [
    {
      title: "Insurance Enquiry",
      description: "Online transactions",
      icon: <AccountBalanceIcon className={styles.iconStyles} />,
      path: "/telpay",
    },
    {
      title: "My Policies",
      description: "Employees data benefit",
      icon: <Diversity3Icon className={styles.iconStyles} />,
      path: "/staff-benefit",
    },
    {
      title: "Claims",
      description: "Pin recharges history",
      icon: <FiberPinIcon className={styles.iconStyles} />,
      path: "/pin-recharge",
    },
    {
      title: "Motor Insurance",
      description: "USSD application reports",
      icon: <SimCardIcon className={styles.iconStyles} />,
      path: "/ussd-reports",
    },
    {
      title: "Home Comprehensive",
      description: "Search USSD transactions",
      icon: <SimCardIcon className={styles.iconStyles} />,
      path: "/ussd",
    },

    {
      title: "Schools Protect",
      description: "VMS Product Management",
      icon: <InventoryIcon className={styles.iconStyles} />,
      path: "/vms-product-management",
    },
    {
      title: "Travel Cover",
      description: "Bundle Transfer and Bundle Extension",
      icon: <MoveDownIcon className={styles.iconStyles} />,
      path: "/bundle-transfer-extension",
    },
    {
      title: "Report A Claim",
      description: "Self Service Kiosk",
      icon: <StorefrontIcon className={styles.iconStyles} />,
      path: "/kiosk",
    },
    {
      title: "View Claims",
      description: "Visa Transactions",
      icon: <PaymentIcon className={styles.iconStyles} />,
      path: "/visa-transactions",
    },
    {
      title: "Get A Policy",
      description: "VMS Vouchers",
      icon: <PriceChangeIcon className={styles.iconStyles} />,
      path: "/vms",
    },
    {
      title: "Contact Us",
      description: "Faults Dashboard",
      icon: <BuildIcon className={styles.iconStyles} />,
      path: "/faults-dashboard",
    },
    {
      title: "Road Assistance",
      description: "OCS OTPs",
      icon: <SmsIcon className={styles.iconStyles} />,
      path: "/ocs-otp",
    },
  ];

  return (
    <>
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
                <div className="absolute top-0 left-0 h-12 w-12 rounded-2xl ml-5 px-3 py-3 bg-gradient-to-r from-red-600 to-red-400 text-white">
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
                href="http://172.27.12.56:911/"
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
