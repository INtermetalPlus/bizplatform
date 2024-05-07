import React, { useEffect, useState } from "react";
import styles from './GAS_shared.module.scss'
import GAS_orderStore from "@/entities/GAS_orderStore/GAS_orderStore";


export const GAS_SetCountry: React.FC = () => {
    const[isList, setIsList] = useState(false)
    const {country, fetchCountry} = GAS_orderStore(state => ({
        country: state.countries,
        fetchCountry: state.fetchCountry
    }))

    useEffect(() => {
        fetchCountry();
    },[fetchCountry])
    
    const openToClick = () => {
        setIsList(!isList)
    }

    return (
        <>
            {country.map((item) => (
                <div className={styles.setCountry} key={item.id}>
                    <div 
                    key={item.id} 
                    className={styles.setCountry__firstCountry}
                    onClick={openToClick}
                    >
                        <span>{item.country_name}</span>
                    </div>
                    {isList && (
                        <div className={styles.setCountry__list} onClick={openToClick}>
                            <div 
                            key={item.id} 
                            className={styles.setCountry__firstCountry}
                            onClick={openToClick}
                            >
                                <span>{item.country_name}</span>
                            </div>
                            <div 
                            key={item.id} 
                            className={styles.setCountry__firstCountry}
                            onClick={openToClick}
                            >
                                <span>{item.country_name}</span>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    )
}