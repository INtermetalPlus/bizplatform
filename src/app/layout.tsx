import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navigation} from "@/widgets/Header/navigation";
import {TradeOperations} from "@/widgets/tradeOperations/TradeOperations";
const inter = Inter({ weight: ["400", "700","300","500"], subsets: ["latin","cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Navigation />*/}
        <TradeOperations />
        {children}

      </body>
    </html>
  );
}