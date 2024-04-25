import React from "react";
import '../../app/globals.module.css'
import styles from './Chats.module.scss'

import { Navigation } from "@/widgets/Header/navigation";
import { Footer } from "@/widgets/Footer";
import { ChatsHeader } from "@/shared/ui/Chats/ChatsHeader";
import { ChatBlock } from "@/widgets/ChatBlock/ChatBlock";


export const Chats: React.FC = () => {
    return (
        <>
            <div className="container">
                <Navigation/>
                <ChatsHeader/>
                <ChatBlock/>
                <Footer/>
            </div>
        </>
    )
}