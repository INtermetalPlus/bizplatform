import React, { useEffect } from "react";


import { orderStore } from "../lib/SOB_store";
import { TO_form_button } from "../ui/TO_form_button";


export const TO_form: React.FC = () => {
    const fetchTradeOperation = orderStore(state => state.orderRequest)
    useEffect(() => {
        fetchTradeOperation()
    }, [fetchTradeOperation])

    return (
        <>
            <form onSubmit={fetchTradeOperation}>
                <TO_form_button/>
            </form>
        </>
    )
}