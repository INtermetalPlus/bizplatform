import React from "react";
import styles from './ChatsFrame.module.scss'
import { Contact_1 } from "@/shared/ui/Chats/Contact_1";


export const ActiveChatsFrame: React.FC = () => {
    return (
        <>
            <div className={styles.contact__activeFrame}>
                <Contact_1/>
            </div>
        </>
    )
}