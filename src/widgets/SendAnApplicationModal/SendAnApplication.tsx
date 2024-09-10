import React, { useState } from "react";
import styles from "./SendAnApplication.module.scss";
import Image from "next/image";
import closeModalIcon from '../../shared/assets/home/header/icons/modalWIndow-close--icon.png';
import { sendApplication } from "../../features/SendAnApplication/api/api";
import { useApplicationStore } from "../../features/SendAnApplication/applicationStore";

interface ModalWindowRegProps {
    closeModalWindow: () => void;
}

export const SendAnApplication: React.FC<ModalWindowRegProps> = ({ closeModalWindow }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [tariff, setTariff] = useState<number | null>(null); // Add a state for the tariff

    const validatePhoneNumber = (phone: string) => {
        const phoneRegex = /^\+996\d{9}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!validatePhoneNumber(phoneNumber)) {
            setError("Введен некорректный номер телефона.");
            setIsLoading(false);
            return;
        }

        if (tariff === null) {
            setError("Тариф не выбран.");
            setIsLoading(false);
            return;
        }

        try {
            console.log('Отправка данных:', { name, phone_number: phoneNumber, comment, is_viewed: true, tariff });
            const response = await sendApplication({ name, phone_number: phoneNumber, comment, is_viewed: true, tariff });
            console.log('Ответ от сервера:', response);
            if (response.success) {
                setSuccess(true);
                closeModalWindow();
            } else {
                setError("Ошибка при отправке заявки.");
            }
        } catch (error) {
            setError("Произошла ошибка при отправке заявки.");
            console.error('Ошибка при отправке запроса:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.main} onClick={closeModalWindow}>
            <div className={styles.container}>
                <div className={styles.BlogModal} onClick={(event) => event.stopPropagation()}>
                    <div className={styles.closeModalWindow} onClick={closeModalWindow}>
                        <Image
                            src={closeModalIcon}
                            width={15}
                            height={15}
                            alt="close"
                        />
                    </div>
                    <div className={styles.Blog_title_text}>
                        <h1 className={styles.title}>Отправить заявку</h1>
                        <p className={styles.subtitle}>
                            Заполните данные поля для отправки заявки на приобретение данного тарифа.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.Blog_form}>
                            <div className={styles.Blog_form_block}>
                                <div className={styles.Blog_form_block_title}>
                                    <h2 className={styles.Blog_form_block_title_text}>Номер телефона</h2>
                                    <div className={styles.form_blog}>
                                        <input
                                            type="text"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            // style={{ width: "385px", height: "64px" }}
                                            placeholder="+996"
                                        />
                                    </div>
                                </div>
                                <div className={styles.Blog_form_block_title1}>
                                    <h2 className={styles.Blog_form_block_title_text}>Ваше имя</h2>
                                    <div className={styles.form_blog}>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            // style={{ width: "385px", height: "64px" }}
                                            placeholder="Мое имя"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Blog_title_text}>
                            <h2 className={styles.title}>Комментарий</h2>
                            <p className={styles.subtitle}>
                                Заполнение данного поля необязательно.
                            </p>
                        </div>
                        <div className={styles.form_blog1}>
                            <input
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                // style={{ width: "790px", height: "120px" }}
                                placeholder="Мой комментарий..."
                            />
                        </div>
                        <div className={styles.form_blog2}>
                            <h2 className={styles.Blog_form_block_title_text}>Выберите тариф</h2>
                            <select
                                value={tariff ?? ''}
                                onChange={(e) => setTariff(Number(e.target.value))}
                                // style={{ width: "385px", height: "64px" }}
                            >
                                <option value="" disabled>Выберите тариф</option>
                                <option value="1">Тариф 1</option>
                                <option value="2">Тариф 2</option>
                                {/* Add other tariff options as needed */}
                            </select>
                        </div>
                        <button type="submit" className={styles.registerForm__submit} disabled={isLoading}>
                            {isLoading ? "Отправка..." : "Отправить"}
                        </button>
                        {error && <p className={styles.error}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};
