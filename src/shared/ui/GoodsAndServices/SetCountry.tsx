import React, { useEffect, useState } from "react";
import styles from './GAS_shared.module.scss'
import GAS_orderStore from "@/entities/GAS_orderStore/GAS_orderStore";


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
            <label className={styles.setCountry}>
                {country.map((item) => (
                    <select name="selectedCountry" key={item.id} className={styles.setCountrylist}>
                        <option value={1} className={styles.setCountrylist__option}>{item.country_name}</option>
                        <option value={2} className={styles.setCountrylist__option}>{item.country_name}</option>
                        <option value={3} className={styles.setCountrylist__option}>{item.country_name}</option>
                    </select>
                ))}
            </label>
        </>
    )
}