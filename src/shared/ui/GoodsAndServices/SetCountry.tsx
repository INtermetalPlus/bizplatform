import React, { useEffect } from "react";
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