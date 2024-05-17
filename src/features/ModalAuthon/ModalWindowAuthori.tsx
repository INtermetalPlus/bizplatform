import React, { FormEventHandler, useState } from "react";
import styles from './ModalWindowAuthori.module.scss';
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const ModalWindowAuthori: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        await signIn('credentials', {
            email: email,
            password: password,
            // callbackUrl: `${window.location.origin}/` // замените на ваш URL обратного вызова
        });
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
