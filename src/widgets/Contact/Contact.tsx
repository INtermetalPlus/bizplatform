import React from "react";
import styles from "./Contact.module.scss"
import phoneIcon from "./../../shared/assets/home/contact/phone_icon.png"
import emailIcon from "./../../shared/assets/home/contact/email_icon.png"
import userIcon from "./../../shared/assets/home/contact/user_icon.png"
import geoIcon from "./../../shared/assets/home/contact/geolocation_icon.png"
import Image from "next/image";
import './../../app/globals.css'

export const Contact: React.FC = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact_block}>
                <div className={styles.contact_card}>
                    <div className={styles.card_icon}>
                        <Image
                            src={phoneIcon}
                            width={48}
                            height={48}
                            alt="icon"/>
                    </div>
                    <a className={styles.contact_p} href="#">+996 705 24 24 54</a>
                </div>
            </div>
            <div className={styles.contact_block}>
                <div className={styles.contact_card}>
                    <div className={styles.card_icon}>
                        <Image
                            src={emailIcon}
                            width={40}
                            height={32}
                            alt="icon"/>
                    </div>
                    <a className={styles.contact_p} href="#">meyman@gmail.com</a>
                </div>
            </div>
            <div className={styles.contact_block}>
                <div className={styles.contact_card}>
                    <div className={styles.card_icon}>
                        <Image
                            src={geoIcon}
                            width={48}
                            height={48}
                            alt="icon"/>
                    </div>
                    <a className={styles.contact_p} href="#">Бишкек</a>
                </div>
            </div>
            <div className={styles.contact_block}>
                <div className={styles.contact_card}>
                    <div className={styles.card_icon}>
                        <Image
                            src={userIcon}
                            width={48}
                            height={48}
                            alt="icon"/>
                    </div>
                    <a className={styles.contact_p} href="#">Паланчаев Паланча</a>
                </div>
            </div>
        </section>
    )
}