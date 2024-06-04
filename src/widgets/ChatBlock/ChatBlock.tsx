import React from "react";
import styles from './ChatBlock.module.scss'
import { ContactsFrame } from "../ContactsFrame";
import { ChatingBlock } from "../ChatingBlock";



export const ChatBlock: React.FC = () => {
    return (
        <>
            <div className={styles.chats__block}>
                <ContactsFrame/>
                <ChatingBlock/>
            </div>
        </>
    )
}