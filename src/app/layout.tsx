import { Inter } from "next/font/google";
import "./globals.css";
import {GetDataTariff} from "@/widgets/GetData/GetDataTariff";
const inter = Inter({ weight: ["400", "700","300","500"], subsets: ["latin","cyrillic"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <GetDataTariff />
        {children}

      </body>
    </html>
  );
}