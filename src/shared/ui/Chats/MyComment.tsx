import React from "react";
import styles from './ChatsUI.module.scss'
import Image from "next/image";
import check from '../../assets/icons/check-icon.png'


export const MyComment: React.FC = () => {
    return (
        <>
            <div className={styles.myComment}>
                <div className={styles.rightContent}>
                    <h4>
                        Вы
                    </h4>
                    <span>
                        Здравствуйте! Меня интересует товар: Блок питания
                    </span>
                </div>
                <div className={styles.leftContent}>
                    <p>
                        11:22
                    </p>
                    <div className={styles.checkBLock}>
                        <Image
                        width={16}
                        height={11}
                        src={check}
                        alt="check message"
                        className={styles.checkArrowOne}
                        />
                        <Image
                        width={16}
                        height={11}
                        src={check}
                        alt="check message"
                        className={styles.checkArrowTwo}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}