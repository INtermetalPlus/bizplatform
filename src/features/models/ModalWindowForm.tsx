import React, {useRef, useEffect} from "react";
import styles from '../UI/ModalWindowInputs.module.scss'
// react-hook-form
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormData } from "../lib/form.interface";
import IMask from "imask";
// error btn
import { ErrorInput } from "../UI/ErrorInput";
import { ErrorPassword } from "../UI/ErrorPassword";


export const ModalWindowForm: React.FC = () => {
    // маска на номер
    const numberRef = useRef(null)

    useEffect(() => {
        if(numberRef.current !== null){
            const mask = IMask(numberRef.current, {
                mask: '+{996}(000)000-000'
            })
        }
    }, [])

    
    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
        reset
    } = useForm<ShippingFormData>({
        mode: 'onChange'
    })

    const onSubmit:SubmitHandler<ShippingFormData> = (data) => {
        console.dir(data);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
            <input
            placeholder="Email" 
            className={`${styles.registerForm__input} ${errors.email ? styles.registerForm__errorInput : ''}`}
            {...register('email', {
                // 'error' т.к. отображаю компонент а не сообщ.
                required: 'error',
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            />
            {errors.email && (
                <ErrorInput/>
            )}
            <input
            type="text"
            placeholder="Телефон" 
            className={`${styles.registerForm__input} ${errors.phone ? styles.registerForm__errorInput : ''}`} 
            {...register('phone' , {
                // закоментил чтобы работала форма сохраняя данные в лог
                // required: 'error'
            })}
            ref={numberRef}
            />
            {errors.phone && (
                <div>{errors.email?.message}</div>
            )}
            <input 
            type="password" 
            placeholder="Пароль" 
            className={`${styles.registerForm__input} ${errors.password ? styles.registerForm__errorInput : ''}`}
            {...register('password', {
                minLength: 8
            })}
            />
            {errors.password && (
                <ErrorPassword/>
            )}
            <button className={styles.registerForm__submit}>Зарегестрироваться</button>
        </form>
    )
}


