'use client'
import { Footer } from "@/widgets/Footer";
import styles from "./page.module.css";
import { Company } from "@/widgets/Company/Company";
import { CreateOrderModal } from "@/widgets/CreateOrderModal/CreateOrderModal";
import { PlatformWork } from "@/widgets/PlatformWork";
import SearchOrAdd from "@/widgets/SearchOrAdd/SearchOrAdd";
import { CommentBlock } from "@/widgets/CommentBlock";
import { Comments } from "@/widgets/Comments";

export default function Home() {
  return (
    <main className={styles.main}>
      <PlatformWork />
      <SearchOrAdd />
      <Company />
      <Comments />
    </main>
  );
}
