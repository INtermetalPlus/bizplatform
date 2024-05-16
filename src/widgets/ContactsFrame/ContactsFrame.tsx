import React from "react";
import styles from './ContactsFrame.module.scss'

import { ChatsFrame_1, ChatsFrame_2 } from "@/widgets/ChatsFrame";
import { ActiveChatsFrame } from "@/widgets/ChatsFrame/ActiveChatsFrame";


export const ContactsFrame: React.FC = () => {
    return (
        <>
            <div className={styles.ContactsFrame}>
                <ActiveChatsFrame/>
                <ChatsFrame_2/>
                <ChatsFrame_1/>
                <ChatsFrame_2/>
                <ChatsFrame_1/>
                <ChatsFrame_2/>
            </div>
        </>
    )
}