'use client'
import styles from "./Provider.module.scss";
import './Provider_ui.scss'
import React, { useEffect } from "react";
import { AllOrder_mainModal } from "@/features/lib/helpers/CloseHook";
import Select from 'react-select'
import { useForm, SubmitHandler } from "react-hook-form";
import { AO_initialFormState } from "@/features/storage/AllOrder/AO_initialFormState";
import { AO_findProvider } from "@/shared/ui/AllOrder/AO_mainModalBtn";
import Image from "next/image";
import cross from '../../shared/assets/icons/x-close.png'


export const Provider: React.FC = () => {
    const {isMainModal, closeMainModal} = AllOrder_mainModal();
    
    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            closeMainModal();
        }
    };


    useEffect(() => {
        if(isMainModal){
          document.body.style.overflowY = 'hidden'
              document.body.style.overflowX = 'hidden'
        }else {
          document.body.style.overflowY = 'visible'
              document.body.style.overflowX = 'hidden'
        }
    }, [isMainModal])


    const category = {value: 0, label: "Категория"}
    const categoryOption = [
        {value: 0, label: "-"},
        {value: 1, label: "Для дома"},
        {value: 2, label: "Электроника"}
    ]
    function changeCategory(selectedCategoryOption: any) {
		setValue('category', selectedCategoryOption.value)
	}


    const regions = {value: 0, label: "Выбрать регионы"}
    const regionsOption = [
        {value: 0, label: "Чуйская область"},
    ]
    function changeRegion(selectedRegions: any) {
        setValue('regions', [selectedRegions.value])
    }


    const city = {value: 0, label: "город"}
    const cityOption = [
        {value: 0, label: "Бишкек"}
    ]
    function changeCity(selectedCity: any) {
        setValue('cities', [selectedCity.value])
    }


    const {register, handleSubmit, setValue} = useForm<AO_initialFormState>()
    const onSubmit: SubmitHandler<AO_initialFormState> =  (data) => {
    //активацияя запроса
    // await productsRequest(data)
    console.log(data);
    console.log('Product added');
    }

    // formatted phone number
    const formatPhoneNumber = (value: string) => {
        const phoneNumber = value.replace(/\D/g, '');

        let formattedPhoneNumber = '+996';
        for (let i = 0; i < phoneNumber.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formattedPhoneNumber += ' ';
            }
            formattedPhoneNumber += phoneNumber[i];
        }
        return formattedPhoneNumber;
    };

    return (
        <>
            {isMainModal && (
                <div className={styles.modal} onClick={handleOutsideClick}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.main}>
                        <Image
                        width={24}
                        height={24}
                        alt='close'
                        src={cross}
                        className={styles.closeModalWindow}
                        onClick={closeMainModal}
                        />
                        <h1 className={styles.main__header}>Разместить свой заказ</h1>
                        <h2 className={styles.main__second_header}>Разместите свой заказ и сэкономьте себе время!</h2>
                        <input
                        type="text"
                        placeholder="Наименование товара или услуги "
                        {...register('order_title')}
                        className={styles.main__order_title}
                        />
                        <textarea
                        placeholder="Описание"
                        {...register('order_text')}
                        className={styles.main__order_description}
                        ></textarea>
                        <Select
                        defaultValue={category}
                        options={categoryOption}
                        className={styles.categories}
                        classNamePrefix='custom-select'
                        onChange={changeCategory}
                        />
                        <div className={styles.main__categories_frame}>
                            <h4 className={styles.main__categories_header}>Поставщики из</h4>
                            <Select
                            defaultValue={regions}
                            options={regionsOption}
                            onChange={changeRegion}


                            />
                            <h4 className={styles.main__categories_header}>Поставка в</h4>
                            <Select
                            defaultValue={city}
                            options={cityOption}
                            onChange={changeCity}
                            
                            
                            />
                        </div>
                        <div className={styles.main__contacts_frame}>
                            <h4 className={styles.main__categories_header}>Номер телефона</h4>
                            <input
                            type="text" 
                            placeholder="+996"
                            {...register('phone_number'), {
                                
                                onChange: (e) => {
                                    const formattedValue = formatPhoneNumber(e.target.value);
                                    setValue('phone_number', formattedValue);
                                }
                            }}
                            />
                            <h4 className={styles.main__categories_header}>Электронная почта</h4>
                            <input
                            type="email"
                            placeholder="email@gmail.com"
                            {...register('email')}
                            />
                        </div>
                        <AO_findProvider/>
                    </form>
                </div>
            )}
        </>
    );
}
