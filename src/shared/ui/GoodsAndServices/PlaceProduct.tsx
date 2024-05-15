'use client'
import React, { useEffect } from "react";
import styles from './GAS_shared.module.scss'
import { useModal } from "@/features/lib/GAS_modalWindowHook";


export const GAS_PlaceProduct: React.FC = () => {
    const {open} = useModal()

    return (
        <button className={styles.placeProductBtn} onClick={open}>Разместить товар</button>
    )
}

