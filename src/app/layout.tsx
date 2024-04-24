import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";
import styles from "./globals.module.scss";
import { Footer } from "@/widgets/Footer";
import  { Navigation } from "../widgets/Header/navigation"
import  SearchOrAdd  from "../widgets/SearchOrAdd/SearchOrAdd"
import { TariffsForSuppliers } from "@/widgets/TariffsForSuppliers";
import { PlatformWork } from "@/widgets/PlatformWork";
// import { CreateOrderModal } from "@/widgets/CreateOrderModal";
import { Company } from "@/widgets/Company/Company";
import { OurRequisitesPage } from "@/pages/OurRequisitesPage";

const inter = Inter({ weight: ["400", "700","300","500"], subsets: ["latin","cyrillic"] });

const sfPro = localFont({
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
      <body className={`${inter.className} ${sfPro.className} ${styles.body}`}>
        <Navigation />
        <PlatformWork />
        <SearchOrAdd />
        {children}
        <TariffsForSuppliers/>
        <Footer/>
        <Company />
        <OurRequisitesPage/>
    
        <Footer/>
      </body>
    </html>
  );
}
