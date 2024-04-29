import React, { useEffect } from "react";
import styles from './TO_formValue.module.scss'


import { orderStore } from "../lib/SOB_store";
import { TO_form_button } from "../ui/TO_form_button";
import { TO_formValue } from "./TO_formValue";


export const TO_form: React.FC = () => {
    const fetchTradeOperation = orderStore(state => state.orderRequest)
    useEffect(() => {
        fetchTradeOperation()
    }, [fetchTradeOperation])

    return (
        <>
            <form onSubmit={fetchTradeOperation} className={styles.tradeOperation}>
                <TO_formValue/>
                <TO_form_button/>
            </form>
        </>
    )
}