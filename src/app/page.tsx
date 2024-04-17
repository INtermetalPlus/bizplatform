'use client'
import { Footer } from "@/widgets/Footer";
import styles from "./page.module.css";
import { Company } from "@/widgets/Company/Company";
import { CreateOrderModal } from "@/widgets/CreateOrderModal/CreateOrderModal";


export default function Home() {
  return (
    <main className={styles.main}>
      {/* <CreateOrderModal onClose={() => {console.log('Order')}} /> */}
    </main>
  );
}
