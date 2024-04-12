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
                required: 'Поле обязательно для заполнения',
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            />
            {errors.email && (
                <div  className={styles.errorButton}>
                    {errors.email.message}
                </div>
            )}
            <input
            type="text"
            placeholder="Телефон" 
            className={`${styles.registerForm__input} ${errors.phone ? styles.registerForm__errorInput : ''}`} 
            {...register('phone' , {
                // закоментил чтобы работала форма сохраняя данные в лог
                required: 'Поле обязательно для заполнения',
                validate: value => /\+\d{3}\(\d{3}\)\d{3}-\d{3}/.test(value)
            })}
            ref={numberRef}
            />
            {errors.phone && (
                <div className={styles.errorButton}>
                    {errors.phone.message}
                </div>
            )}
            <input 
            type="password" 
            placeholder="Пароль" 
            className={`${styles.registerForm__input} ${errors.password ? styles.registerForm__errorInput : ''}`}
            {...register('password', {
                required: 'Поле обязательно для заполнения',
                minLength: {
                    value: 8,
                    message: 'Пароль должен составлять не менее 8 символов'
                }
            })}
            />
            {errors.password && (
                <div className={styles.errorButton}>
                    {errors.password.message}
                </div>
            )}
            <button className={styles.registerForm__submit}>Зарегестрироваться</button>
        </form>
    )
}


