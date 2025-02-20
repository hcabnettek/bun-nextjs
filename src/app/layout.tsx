import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import Header from "@/components/Header";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarmiiilaAI",
  description: "Do cool stuff with AI",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "anitaliased bg-[#EAEEFE]")}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
