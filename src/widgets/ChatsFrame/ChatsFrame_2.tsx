import React from "react";
import styles from './ChatsFrame.module.scss'
import { Contact_2 } from "@/shared/ui/Chats/Contact_2";


export const ChatsFrame_2: React.FC = () => {
    return (
        <>
            <div className={styles.contact__frame}>
                <Contact_2/>
            </div>
        </>
    )
}