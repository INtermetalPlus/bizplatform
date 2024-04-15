import React from 'react'
import styles from './Footer.module.scss'
import Image from "next/image";
import ibp from "./../../shared/assets/home/footer/ibp.png"

export const Footer:React.FC = ():React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_blog}>
            <div className={styles.footer_logo}>
                <Image src={ibp} alt="" width={98} height={76}/>
            </div>
            <div className={styles.footer_info_blog}>
              <div className={styles.footer_info}>
                <a className={styles.info_a} href="">Все заказы</a>
                <a className={styles.info_a} href="">Товары</a>
                <a className={styles.info_a} href="">Цены на тарифы</a>
                <a className={styles.info_a} href="">О платформе</a>
                <a className={styles.info_a} href="">Реквизиты</a>
                <a className={styles.info_a} href="">Помощь</a>
                </div>

            </div>
            <div className={styles.footer_info_blog}>
            <div className={styles.topRow}>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                </div>
                </div>
        </div>
        </div>
    </footer>   
  )
}
