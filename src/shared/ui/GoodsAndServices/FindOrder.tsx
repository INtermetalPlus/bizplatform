import React from "react";
import styles from './GAS_shared.module.scss'


export const GAS_FindOrder: React.FC = () => {
    return (
        <input 
        type="search" 
        placeholder="Найти заказ" 
        className={styles.orderSearch}
        />
    )
}