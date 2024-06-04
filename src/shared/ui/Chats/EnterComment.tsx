import React from "react";
import styles from './ChatsUI.module.scss'


export const EnterComments: React.FC = () => {
    return (
        <>
        <div className={styles.inputBlock}>
            <input
            type="text"
            placeholder="Напишите сообщение" 
            className={styles.enterMessageOnChat}
            />
            <div>Block with icon</div>
        </div>
        </>
    )
}