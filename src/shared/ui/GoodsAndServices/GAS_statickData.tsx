import React from "react";
import { StatickDataItem } from "@/shared/ui/StatickData/GAS_statickDataItem";
import styles from './GAS_shared.module.scss'


export const GAS_statickData: React.FC = () => {
    return (
        <div className={styles.GASContent}>
            <StatickDataItem/>
        </div>      
    )
}