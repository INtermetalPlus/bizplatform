import React from "react";
import styles from './ChatsUI.module.scss'
import contact_1_image from '../../assets/images/Contact-1--image.png'
import Image from "next/image";


export const Contact_1: React.FC = () => {
    return (
        <>
            <div className={styles.contact}>
                <div className={styles.contactFrame__topContent}>
                    <span className={styles.topContent__orderName}>
                        Товар: Блок питания
                    </span>
                    <span className={styles.topContent__id}>
                        №4657864
                    </span>
                </div>
                <div className={styles.contactFrame}>
                    <Image
                    width={70}
                    height={70}
                    src={contact_1_image}
                    alt="Электрик"
                    />
                    <div className={styles.rightContent}>
                        <h4 className={styles.rightContent__header}>
                            Электромастер
                        </h4>
                        <span className={styles.rightContent__text}>
                            Здравствуйте! Меня интересует товар:
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}