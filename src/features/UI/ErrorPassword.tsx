import React from "react";
import styles from './ModalWindowInputs.module.scss'


export const ErrorPassword: React.FC = () => {
    return (
        <span className={styles.errorButton}>
            Пароль должен составлять не менее 8 символов
        </span>
    )
}