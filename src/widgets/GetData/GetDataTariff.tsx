'use client'
import React, {useEffect, useState} from "react";
import {tariffStore} from "@/features/GetDataTariff/lib/GDT_store";

export const GetDataTariff: React.FC = (): React.ReactElement => {

    const {tariffOperation, requestTariff} = tariffStore(state => ({
        tariffOperation: state.tariffState,
        requestTariff: state.tariffRequest
    }))

    useEffect(() => {
        requestTariff()
    }, [requestTariff])


    return (
        <>
            {tariffOperation.map((item) => (
                    <div key={item.id}>
                        <h4>{item.tariff_title}</h4>
                        <span>{item.tariff_description}</span>
                        <span>{item.price_per_month}$</span>
                    </div>
                ))
            }
        </>
    );
};