"use client";
import React, { useState } from "react";
import styles from "./SendAnApplication.module.scss";
import Image from "next/image";
import closeModalIcon from '../../shared/assets/home/header/icons/modalWIndow-close--icon.png'

interface ModalWindowRegProps {
    closeModalWindow: () => void
}

export const SendAnApplication:React.FC<ModalWindowRegProps> = ({ closeModalWindow }) => {
    const notCLosed = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && (
                <div className={styles.main} onClick={closeModalWindow}>
                    <div className={styles.container}>
                        <div className={styles.BlogModal} onClick={notCLosed}>
                        <div className={styles.closeModalWindow} onClick={handleCloseModal}>
                            <Image
                            src={closeModalIcon}
                            width={15}
                            height={15}
                            alt="close"
                            />
                </div>
                            <div className={styles.Blog_title_text}>
                                <h1 className={styles.title}>
                                    Отправить заявку
                                </h1>
                                <p className={styles.subtitle}>
                                    Заполните данные поля для отправки заявки на приобретение данного тарифа.
                                </p>
                            </div>
                            <div className={styles.Blog_form}>
                                <div className={styles.Blog_form_block}>
                                    <div className={styles.Blog_form_block_title}>
                                        <h2 className={styles.Blog_form_block_title_text}>
                                            Номер телефона
                                        </h2>
                                        <div className={styles.form_blog}>
                                            <input
                                                type="text"
                                                name="price"
                                                style={{ width: "385px", height: "64px" }}
                                                placeholder="+996"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.Blog_form_block_title1}>
                                        <h2 className={styles.Blog_form_block_title_text}>
                                            Ваше имя 
                                        </h2>
                                        <div className={styles.form_blog}>
                                            <input
                                                type="text"
                                                name="price"
                                                style={{ width: "385px", height: "64px" }}
                                                placeholder="Мое имя"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.Blog_title_text}>
                                <h2 className={styles.title}>
                                    Комментарий
                                </h2>
                                <p className={styles.subtitle}>
                                    Заполнение данного поля необязательно.                     
                                </p>
                            </div>
                            <div className={styles.form_blog}>
                                <input
                                    type="text"
                                    name="price"
                                    style={{ width: "790px", height: "120px" }}
                                    placeholder="Мой комментарий..."
                                />
                            </div>
                            <button type="submit" className={styles.registerForm__submit}>
                            Отправить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
