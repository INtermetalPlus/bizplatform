'use client'
import '../../app/globalStyle.css'
import styles from "./Provider.module.scss";
import './Provider_ui.scss'
import './suply_unit__ui.scss'
import React, { useEffect } from "react";
import { AO_mainModal, applicationModal } from "@/features/lib/helpers/CustomHook";
import Select from 'react-select'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IMaskInput } from 'react-imask';
import { AO_ShippingFormState } from '@/features/lib/storage/AllOrderStore/AO_ShippingformState';
import { AO_findProvider } from "@/shared/ui/AllOrder/AO_mainModalBtn";
import Image from "next/image";
import cross from '../../shared/assets/icons/x-close.png'
import { AO_mainModalStore } from '@/features/lib/storage/AllOrderStore/AO_orderStore';
import { SendingApplicationModal } from '@/features/models/Provider window/SendingApplicationModal';


export const Provider: React.FC = () => {
    const {isMainModal, closeMainModal} = AO_mainModal();
    
    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            closeMainModal();
        }
    };
 

    useEffect(() => {
        if(isMainModal){
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflowY = 'visible'
            document.body.style.overflowX = 'hidden'
        }
    }, [isMainModal])


    const category = {value: 0, label: "Категория"}
    const categoryOption = [
        {value: 1, label: "Для дома"},
        {value: 2, label: "Электроника"},
        {value: 3, label: "Ветровки"}
    ]


    const regions = {value: 0, label: "Выбрать регионы"}
    const regionsOption = [
        {value: 1, label: "Чуйская область"},
        {value: 2, label: "Московская область"}
    ]


    const city = {value: 0, label: "Выбрать город"}
    const cityOption = [
        {value: 1, label: "Бишкек"}
    ]


    const countries = {value: 0, label: "Выбрать страна"}
    const countriesOption = [
        {value: 1, label: "Кыргызстан"},
        {value: 1, label: "РФ"}
    ]


    const deliveryAdress = {value: 0, label: "Доставка в ..."}
    const deliveryAdress_Option = [
        {value: 1, label: "Бишкек"},
        {value: 2, label: "Москва"}
    ]


    const {register, handleSubmit, setValue, control} = useForm<AO_ShippingFormState>()
    const onSubmit: SubmitHandler<AO_ShippingFormState> = (data) => {
    //активацияя запроса
    fetchOrder(data)
    console.log('Product added');
    closeMainModal()
    open_SAM_modal()
    }
    
    
    const {open_SAM_modal} = applicationModal()
    const {fetchOrder} = AO_mainModalStore()

    return (
        <>
            {isMainModal && (
                <div className={styles.modal} onClick={handleOutsideClick}>
                    <input
                    type='text'
                    className={styles.company}
                    {...register('company')}
                    defaultValue={7}
                    readOnly
                    />
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
                        placeholder="Наименование товара или услуги"
                        {...register('order_title')}
                        
                        className={styles.main__order_title}
                        />
                        <textarea
                        placeholder="Описание"
                        {...register('order_text')}
                        className={styles.main__order_description}
                        ></textarea>
                        <div className={styles.main__categories_frame}>
                            <div className={styles.categories_frame__container}>
                                <h4 className={styles.main__categories_header}>Поставщики из</h4>
                                <Select
                                defaultValue={regions}
                                options={regionsOption}
                                onChange={(option) => setValue('regions', [option?.value || 0])}
                                className={styles.supply_unit}
                                classNamePrefix='supply-unit'
                                />
                            </div>
                            <div className={styles.categories_frame__container}>
                                <h4 className={styles.main__categories_header}>Поставка в</h4>
                                <Select
                                defaultValue={city}
                                options={cityOption}
                                onChange={(option) => setValue('cities', [option?.value || 0])}
                                className={styles.supply_unit}
                                classNamePrefix='supply-unit'
                                />
                            </div>
                        </div>
                        <div className={styles.regions_frame}>
                                <div>
                                    <h4 className={styles.main__categories_header}>Страна</h4>
                                    <Select
                                    defaultValue={countries}
                                    options={countriesOption}
                                    onChange={(option) => setValue('countries', [option?.value || 0])}
                                    className={styles.supply_unit}
                                    classNamePrefix='supply-unit'
                                    />
                                </div>
                                <div>
                                    <h4 className={styles.main__categories_header}>Адресс доставки</h4>
                                    <Select
                                    defaultValue={deliveryAdress}
                                    options={deliveryAdress_Option}
                                    onChange={(option) => setValue('delivery_address', [option?.value || 0])}
                                    className={styles.supply_unit}
                                    classNamePrefix='supply-unit'
                                    />
                                </div>
                            </div>
                        <div className={styles.main__contacts_frame}>
                            <div className={styles.contacts}>
                                <div className={styles.contacts__container}>
                                    <h4 className={styles.main__categories_header}>Номер телефона</h4>
                                    <Controller
                                        {...register('phone_number')}
                                        control={control}
                                        render={({ field }) => (
                                        <IMaskInput
                                            {...field}
                                            // mask="+{996} (000) 000-000"
                                            mask="+{996}000000000"
                                            definitions={{
                                            '0': /\d/,
                                            }}
                                            lazy={false}
                                            type="text"
                                            onAccept={(value) => field.onChange(value)}
                                            className={styles.contacts_frame__phone}
                                        />
                                        )}
                                    />
                                </div>
                                <div className={styles.contacts__container}>
                                    <h4 className={styles.main__categories_header}>Электронная почта</h4>
                                    <input
                                    type="email"
                                    placeholder="email@gmail.com"
                                    {...register('email')}
                                    className={styles.contacts_frame__email}
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className={styles.main__categories_header}>О товаре:</h4>
                                <input
                                type="number"
                                {...register('price')}
                                placeholder='Цена'
                                className={styles.price}
                                />
                            </div>
                            <Select
                            defaultValue={category}
                            options={categoryOption}
                            className={styles.categories}
                            classNamePrefix='custom-select'
                            onChange={(option) => setValue('category', option?.value || 0)}
                            />
                        </div>
                        <AO_findProvider/>
                    </form>
                </div>
            )}
            <SendingApplicationModal/>
        </>
    );
}
