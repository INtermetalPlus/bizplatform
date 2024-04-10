import React from "react";
import styles from './ModalWindowInputs.module.scss'


export const ErrorInput: React.FC = () => {
    return (
        <span className={styles.errorButton}>
            Это поле обязательное
        </span>
    )
}


