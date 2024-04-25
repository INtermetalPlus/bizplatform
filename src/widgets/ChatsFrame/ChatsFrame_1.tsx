import React from "react";
import styles from './ChatsFrame.module.scss'
import { Contact_1 } from "@/shared/ui/Chats/Contact_1";


export const ChatsFrame_1: React.FC = () => {
    return (
        <>
            <div className={styles.contact__frame}>
                <Contact_1/>
            </div>
        </>
    )
}