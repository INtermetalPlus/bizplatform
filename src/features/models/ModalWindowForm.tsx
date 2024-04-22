import React from "react";
import styles from './ModalWindowInputs.module.scss'
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormData } from "../lib/form.interface";
import axios from "axios";


export const ModalWindowForm: React.FC = () => {
    // number mask
    function formatPhoneNumber(value: string) {
        const cleaned = ('' + value).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
        if (match) {
          return '+996' + '(' + match[1] + ')' + match[2] + '-' + match[3];
        }
        return value;
      }


    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
        reset,
        setValue
    } = useForm<ShippingFormData>({
        mode: 'onChange'
    })

    
    const onSubmit:SubmitHandler<ShippingFormData> = async (data) => {
        const request = await axios.post(`http://167.172.161.102:82/api/v1/registration/`, data)
        console.log('Form data saved');
        console.log(request.data);
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
            onChange={(e) => setValue('email', e.target.value)}
            />
            {errors.email && (
                <div  className={styles.errorButton}>
                    {errors.email.message}
                </div>
            )} 
            <input 
            type="tel" 
            className={`${styles.registerForm__input} ${errors.email ? styles.registerForm__errorInput : ''}`}
            placeholder="Телефон"   
            {...register('phone', {
                    required: 'Поле обязательно для заполнения',
                    pattern: {
                        value: /^\+996\(\d{3}\)\d{3}-\d{3}$/,
                        message: 'Формат номера неверный',
                    },
                    maxLength: {
                        value: 16,
                        message: 'Телефон должен быть из 9 цифр'
                    }
            })}
            // onChange={e => e.target.value = formatPhoneNumber(e.target.value)}
            onChange={e => setValue('phone', formatPhoneNumber(e.target.value))}
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
            onChange={(e) => setValue('password', e.target.value)}
            />
            {errors.password && (
                <div className={styles.errorButton}>
                    {errors.password.message}
                </div>
            )}
            <button className={styles.registerForm__submit}>
                Зарегестрироваться
            </button>
        </form>
    )
}


