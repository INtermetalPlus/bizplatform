import React from "react";
import styles from "./ProviderModal.module.scss"
import './../../app/globals.css'

export const ProviderModal: React.FC = () => {
    return (
        <div className={styles.modal}>
            <div className="container">
                <div className={styles.modalInfo}>
                    <div className={styles.modal__title}>
                        <h2 className={styles.modal__title__header}>
                            Написать поставщику
                        </h2>
                        <span className={styles.modal__span}>В данном поле вы можете ввести предложение или вопрос заказчику о его товаре или услуге.</span>
                    </div>
                    <div className={styles.modalBlock}>
                        <div className={styles.modalBlock__input}>
                            <div className={styles.modalBlock__inputFlex}>
                                <div className={styles.input__childBlock}>
                                    <span className={styles.input__p}>Имя</span>
                                    <input type="text" placeholder="Ваше имя"/>
                                </div>
                                <div className={styles.input__childBlock}>
                                    <span className={styles.input__p}>Фамилия <span>(необязательно)</span></span>
                                    <input type="text" placeholder="Ваша фамилия"/>
                                </div>
                            </div>
                            <div className={styles.input__bigBlock}>
                                <span className={styles.input__p}>Введите предложение или вопрос заказчику</span>
                                <input type="text" placeholder="У меня есть предложение/вопрос..."/>
                            </div>
                            <div className={styles.modalBlock__inputFlex}>
                                <div className={styles.input__childBlock}>
                                    <span className={styles.input__p}>Номер телефона</span>
                                    <input type="text" placeholder="+996"/>
                                </div>
                                <div className={styles.input__childBlock}>
                                    <span className={styles.input__p}>Электронная почта</span>
                                    <input type="text" placeholder="email@gmail.com"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className={styles.modal__span}>Нажимая кнопку «Отправить », вы соглашаетесь с условиями использования и обработкой персональных данных.</span>
                    <button className={styles.modal__btn}>Отправить</button>
                </div>

            </div>
        </div>
    )
}