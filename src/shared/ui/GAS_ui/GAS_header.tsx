import React from "react";
import styles from './GAS_ui.module.scss'


export const GAS_header: React.FC = () => {
    return (
        <>
            <h1 className={styles.header}>Добавление товара или услуги</h1>
        </>
    )
}