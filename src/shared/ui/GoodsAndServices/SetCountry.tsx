import React, { useState } from "react";
import styles from './GAS_shared.module.scss'


export const GAS_SetCountry: React.FC = () => {
    const[isList, setIsList] = useState(false)

    const openToClick = () => {
        setIsList(!isList)
    }

    return (
        <>
            <div className={styles.setCountry}>
                <div 
                className={styles.setCountry__firstCountry}
                onClick={openToClick}
                >
                    <span className={styles.setCountry__header}>KG</span>
                </div>
            {isList && (
                <div className={styles.setCountry__list} onClick={openToClick}>
                    <span className={styles.list__country}>RU</span>
                    <span className={styles.list__country}>RU</span>
                </div>
            )}
        </div>
        </>
    )
}