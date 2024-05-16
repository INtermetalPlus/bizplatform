import React from "react";
import styles from './ChatsUI.module.scss'


export const ContactComment: React.FC = () => {
    return (
        <>
            <div className={styles.ContactComment}>
                <div className={styles.ContactComment__text}>
                    <p>
                        11:24
                    </p>
                    <span>
                    Блок питания - незаменимый компонент для обеспечения электропитанием различных электронных устройств. Обеспечивает стабильное и надежное энергоснабжение, идеально подходит для зарядки гаджетов, компьютеров, игровых консолей и других устройств. Компактный и эффективный, гарантирует безопасность и долговечность вашей техники.
                    </span>
                </div>
            </div>
        </>
    )
}