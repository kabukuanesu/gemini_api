import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/nav-bar/nav-bar";
import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skin Cancer Detector",
  description: "Crafted by AK@2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className }>*/}
      <body className={"bg-gray-100 m-5"}>
        {/*<div className="flex min-h-screen flex-col items-center justify-between p-24">*/}
        {<div>{children}</div>}
      </body>
    </html>
  );
}
