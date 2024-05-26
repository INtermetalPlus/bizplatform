'use client'
import React, { useEffect, useCallback } from "react";
import styles from './GAS_shared.module.scss';
import { GAS_orderStore } from "@/entities/GAS_orderStore/GAS_orderStore";

export const GAS_SetCountry: React.FC = () => {
    const { country, fetchCountry: fetchCountryFromStore } = GAS_orderStore(state => ({
        country: state.countries,
        fetchCountry: state.fetchCountry
    }));

    const fetchCountry = useCallback(() => {
        fetchCountryFromStore();
    }, [fetchCountryFromStore]);

    useEffect(() => {
        fetchCountry();
    }, [fetchCountry]);

    return (
        <label className={styles.setCountry}>
            <select name="selectedCountry" className={styles.setCountrylist}>
                {country.map((item) => (
                    <option value={item.id} className={styles.setCountrylist__option} key={item.id}>
                        {item.country_name}
                    </option>
                ))}
            </select>
        </label>
    );
};
