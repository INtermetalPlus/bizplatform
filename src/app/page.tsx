import styles from "./page.module.css";
import { Company } from "@/widgets/Company/Company";


export default function Home() {
  return (
    <main className={styles.main}>
    <Company/>
    </main>
  );
}
