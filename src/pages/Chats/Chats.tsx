import React from "react";
import '../../app/globals.module.css'
import { ChatsHeader } from "@/shared/ui/Chats/ChatsHeader";
import { ChatBlock } from "@/widgets/ChatBlock/ChatBlock";
import styles from './Chats.module.scss'

export const Chats: React.FC = () => {
    return (
        <>
            <div className={styles.container}>     
                <ChatsHeader/>
                <ChatBlock/>
            </div>
        </>
    )
}