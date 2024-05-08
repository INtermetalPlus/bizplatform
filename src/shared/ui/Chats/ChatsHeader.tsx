import React from "react";
import styles from './ChatsUI.module.scss'


export const ChatsHeader: React.FC = () => {
    return (
        <h1 className={styles.chats__header}>Чаты</h1>
    )
}