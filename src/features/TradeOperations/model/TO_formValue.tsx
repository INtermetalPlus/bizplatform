import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TO_shippingData } from "../lib/TO_initialState";


export const TO_form: React.FC = () => {
    


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<TO_shippingData>({
        mode: 'onChange'
    })



    return (
        <>
            <input 
            type="text" 



            />
            <input 
            type="text" 



            />
            <input 
            type="text" 



            />
        </>
    )
}