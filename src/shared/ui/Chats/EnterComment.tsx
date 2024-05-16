import React from "react";
import styles from './ChatsUI.module.scss'


export const EnterComments: React.FC = () => {
    return (
        <>
            <input
            type="text"
            placeholder="Напишите сообщение" 
            className={styles.enterMessageOnChat}
            />
        </>
    )
}