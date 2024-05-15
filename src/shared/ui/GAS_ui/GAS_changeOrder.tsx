import React from "react";
import styles from './GAS_ui.module.scss'


export const GAS_changeOrder: React.FC = () => {
    return (
        <>
            <div className={styles.checkboxForm}>
                <input 
                type="checkbox" 
                value="in stock" 
                className={styles.checkbox}
                id="check_1"
                />
                <label 
                htmlFor="check_1" 
                className={styles.checkboxLabel}
                >
                    В наличии
                </label>
                <input 
                type="checkbox" 
                value="to order" 
                className={styles.checkbox}
                id="check_2"
                />
                <label 
                htmlFor="check_2" 
                className={styles.checkboxLabel}
                >
                    Под заказ
                </label>
            </div>
        </>
    )
}