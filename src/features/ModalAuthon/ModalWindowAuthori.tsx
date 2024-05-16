import React, { useState } from "react";
import styles from './ModalWindowAuthori.module.scss';
import axios from "axios";

interface AuthorizationData {
    email: string;
    password: string;
}

export const ModalWindowAuthori: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post<AuthorizationData>(
                "http://167.172.161.102:82/api/v1/authorization/",
                {
                    email,
                    password
                }
            );
            console.log("Authorization successful:", response.data);

            // Сохранение токенов в локальное хранилище
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);

        } catch (error) {
            console.error("Authorization error:", error.response?.data);
            // Обработка ошибки авторизации здесь
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.registerForm}>
            <input
                type="email"
                placeholder="Email" 
                className={styles.registerForm__input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Пароль" 
                className={styles.registerForm__input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.registerForm__submit}>
                Войти
            </button>
        </form>
    );
};
