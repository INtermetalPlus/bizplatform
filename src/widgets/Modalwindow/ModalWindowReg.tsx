import React from "react";
import styles from './ModalWindowReg.module.scss'
import Image from "next/image";
import closeModalIcon from '../../shared/assets/home/header/icons/modalWIndow-close--icon.png'
import { ModalWindowForm } from "@/features/models/ModalWindowForm";


interface ModalWindowRegProps {
    closeModalWindow: () => void;
}


export const ModalWindowReg: React.FC<ModalWindowRegProps> = ({ closeModalWindow }) => {
    return (
        <div className={styles.modalWindow__background}>
            <div className={styles.modalWindow}>
                <div className={styles.closeModalWindow} onClick={closeModalWindow}>
                    <Image
                    src={closeModalIcon}
                    width={15}
                    height={15}
                    alt="close modal"
                    />
                </div>
                <h3 className={styles.closeModalWindow__header}>
                    Регистрация
                </h3>
                    <ModalWindowForm/>
                    <div className={styles.modalWindow__signUpBlock}>
                        <h3 className={styles.modalWindow__unswer}>
                            Уже зарегистрированы?
                        </h3>
                        <a href="#" className={styles.modalWindow__becomeAccount}>
                            <p>Войти</p>
                        </a>
                    </div>
                    <span className={styles.modalWindow__info}>
                        Нажимая на кнопку “Зарегистрироваться”, вы
                        соглашаетесь с <a href="#" className={styles.modalWindow__infoLink}>условиями использования</a> и
                        обработкой персональных данных
                    </span>
            </div>
        </div>
    )
}



