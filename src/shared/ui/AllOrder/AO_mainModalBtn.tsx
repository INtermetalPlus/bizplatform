import React from "react";
import styles from './AO_ui.module.scss'


export const AO_findProvider: React.FC = () => {
    return <button className={styles.provider_btn} type="submit">Найти поставщиков</button>
}