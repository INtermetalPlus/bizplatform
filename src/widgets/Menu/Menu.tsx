import React from "react";
import {inspect} from "util";
import styles from "./Menu.module.scss"
import logoMenu from "./../../shared/assets/home/menu/menu_logo.png"
import Image from "next/image";

export const Menu: React.FC = () => {
    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                <div className={styles.menu_info}>
                    <div className={styles.logo}>
                        <Image
                            src={logoMenu}
                            width={250}
                            height={250}
                            alt="logo"/>
                    </div>
                    <h1 className={styles.h1}>ООО “Виктори & Джастис”</h1>
                    <h2 className={styles.menu_h2}>Lorem ipsum dolor sit amet consectetur. Diam aliquam quis morbi adipiscing facilisis nibh ullamcorper. Odio nulla massa elit.</h2>
                    <button className={styles.menu_btn}>Заказать звонок</button>
                </div>
            </div>
        </section>
    )
}