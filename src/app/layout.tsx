import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import styles from "./globals.module.scss";
import { Footer } from "@/widgets/Footer";
import  { Navigation } from "../widgets/Header/navigation"
import {ProductList} from '../widgets/ProductList/ProductList'
import {SendAnApplication} from "../widgets/SendAnApplicationModal/SendAnApplication"
import {Menu} from "@/widgets/Menu/Menu";
import {Contact} from "@/widgets/Contact/Contact";
import Card from "@/widgets/Card/Card";
import {AboutCompany} from "@/widgets/aboutCompany/AboutCompany";
import ProtectedRoute from "@/features/Login/ProtectedRoute";

const inter = Inter({ weight: ["400", "700","300","500"], subsets: ["latin","cyrillic"], variable: "--font-inter" });

const sfPro = localFont({
  variable:'--font-sfPro',
  src: [
    {
    
      path: './../shared/assets/font/SFPRODISPLAYREGULAR.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../shared/assets/font/SFPRODISPLAYBLACKITALIC.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './../shared/assets/font/SFPRODISPLAYBOLD.otf',      
      weight: '700',
      style: 'normal',
    },
    {
      path: './../shared/assets/font/SFPRODISPLAYHEAVYITALIC.otf',      
      weight: '700',
      style: 'italic',
    },
  ],
})

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
      <body className={`${inter.variable} ${sfPro.variable} ${styles.body}`}>
        <Navigation />
        {/* <ProtectedRoute> */}
        {children}
        {/* </ProtectedRoute> */}
        <Footer/>
        <ProductList/>
      </body>
    </html>
  );
}
