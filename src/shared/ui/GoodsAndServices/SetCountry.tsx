'use client'
import React, { useEffect, useState } from "react";
import styles from './GAS_shared.module.scss'
import { GAS_orderStore } from "@/entities/GAS_orderStore/GAS_orderStore";


export const GAS_SetCountry: React.FC = () => {
    const {country, fetchCountry} = GAS_orderStore(state => ({
        country: state.countries,
        fetchCountry: state.fetchCountry
    }))

    useEffect(() => {
        fetchCountry();
    },[fetchCountry])

    return (
        <>
            {country.map((item) => (
                <div key={item.id} className={styles.setCountry}>
                    <div 
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
            <label className={styles.setCountry}>
                <select name="selectedCountry" className={styles.setCountrylist}>
                    {country.map((item) => (
                        <option value={1} className={styles.setCountrylist__option} key={item.id}>{item.country_name}</option>
                    ))}
                </select>
            </label>
        </>
    )
}