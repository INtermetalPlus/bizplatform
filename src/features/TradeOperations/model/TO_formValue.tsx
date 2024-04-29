import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TO_shippingData } from "../lib/TO_initialState";
import styles from './TO_formValue.module.scss'
import { TO_header } from "../ui/TO_header";


export const TO_formValue: React.FC = () => {
    const {
        handleSubmit,
        reset,
        setValue,
        register
    } = useForm<TO_shippingData>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<TO_shippingData> = (TO_data) => {
        console.log(TO_data);
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onChange={e => setValue('detail', 'buy/sell order form')}>
                <TO_header/>
                <h4 className={styles.tradeOperation__inputTitle}>Что хотите продать?</h4>
                <input 
                type="text" 
                placeholder="Я хочу продать..."
                {...register('orderName')}
                onChange={(e) => setValue('orderName', e.target.value)}
                className={styles.tradeOperation__firstInput}
                />
                <h4 className={styles.tradeOperation__inputTitle}>Номер телефона</h4>
                <input 
                type="text" 
                placeholder="+996"
                {...register('number')}
                className={styles.tradeOperation__anotherInputs}
                />
                <h4 className={styles.tradeOperation__inputTitle}>Электронная почта</h4>
                <input 
                type="text" 
                placeholder="email@gmail.com"
                {...register('email')}
                onChange={(e) => setValue('email', e.target.value)}
                className={styles.tradeOperation__anotherInputs}
                />
            </form>
        </>
    )
}