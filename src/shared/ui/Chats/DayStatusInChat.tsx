import React from "react";
import styles from './ChatsUI.module.scss'


export const DayStatusInChat: React.FC = () => {
    return (
        <>
            <div className={styles.day}>
                <h5 className={styles.dayInfo}>Сегодня</h5>
            </div>
        </>
    )
}