import React from "react";
import styles from './ChatsUI.module.scss'
import contact_1_image from '../../assets/images/Contact-1--image.png'
import Image from "next/image";

export const Commentator: React.FC = () => {
    return (
        <>
            <div className={styles.commentator}>
                <Image
                width={80}
                height={80}
                src={contact_1_image}
                alt="Электрик"
                className={styles.commentator__avatar}
                />
                <div className={styles.commentator__leftContent}>
                    <h4 className={styles.commentator__header}>
                        Электромастер
                    </h4>
                    <span className={styles.commentator__orderName}>
                        Товар: Блок питания
                    </span>
                    <span className={styles.commentator__id}>
                        №4657864
                    </span>
                </div>
            </div>
        </>
    )
}