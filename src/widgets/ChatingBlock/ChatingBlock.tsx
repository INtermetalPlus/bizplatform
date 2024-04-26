import React from "react";
import styles from './ChatingBlock.module.scss'
import { Commentator } from "@/shared/ui/Chats/Commentator";
import { DayStatusInChat } from "@/shared/ui/Chats/DayStatusInChat";
import { MyComment } from "@/shared/ui/Chats/MyComment";
import { ContactComment } from "@/shared/ui/Chats/ContactComment";
import { EnterComments } from "@/shared/ui/Chats/EnterComment";


export const ChatingBlock: React.FC= () => {
    return (
        <>
            <div className={styles.chatingBlock}>
                <Commentator/>
                <div className={styles.mainChat}>
                    <DayStatusInChat/>
                    <MyComment/>
                    <ContactComment/>
                    <MyComment/>
                    <ContactComment/>   
                </div>
                <EnterComments/>
            </div>
        </>
    )
}