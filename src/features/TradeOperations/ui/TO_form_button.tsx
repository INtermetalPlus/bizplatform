import React from "react";
import styles from './TO_form_button.module.scss'

export const TO_form_button: React.FC = () => {
    return <div className={styles.tradeOperation__btnContaine}>
            <span className={styles.btnContainer__description}>
                Lorem ipsum dolor sit amet consectetur. Orci dolor a consectetur
                 arcu aenean cursus sed netus.
            </span>
            <button type="submit" className={styles.btnContainer__btnText}>Найти клиентов</button>
        </div>
}