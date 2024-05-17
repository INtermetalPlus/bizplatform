import React from "react";
import styles from './GAS_ui.module.scss'

export const GAS_addOrderBtn = ({type}: {type: "submit"}): JSX.Element => {
    return (
        <button className={styles.addOrder} type={type}>Добавить товар</button>
    )
}