import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from 'react-select'
// styles
import styles from './GAS_ModalWindow.module.scss'
import './Select.scss'


import { GAS_addImage } from "@/shared/ui/GAS_ui/GAS_addImage";
import { GAS_header } from "@/shared/ui/GAS_ui/GAS_header";
import { GAS_addOrderBtn } from "@/shared/ui/GAS_ui/GAS_addOrderBtn";
import { GAS_changeOrder } from "@/shared/ui/GAS_ui/GAS_changeOrder";
import { productsStore } from "@/features/lib/GAS_store";
import { ShippingProductData } from "./ShippingProductData";
import { useModal } from "@/features/lib/GAS_modalWindowHook";


export const GAS_ModalWindow: React.FC = () => {
    const productsRequest = productsStore(state => state.fetchOrder)

    const {register, handleSubmit, setValue} = useForm<ShippingProductData>()

    const onSubmit: SubmitHandler<ShippingProductData> = async (data) => {
        await productsRequest(data)
        console.log(data);
        console.log('Product added');
        
    }


    // categories
    const categories = { value: 0, label: 'Для дома' }
    const options = [
        { value: 1, label: 'Электроника' }
    ]
      
    function changeCategories(selectedCategoryOption: any) {
        setValue('categories', [selectedCategoryOption.value])
    }

    
    // currency
    const currency = {value: 0, label: 'Валюта'}
    const priceOption = [
        {value: 1, label: 'Сом'},
        {value: 2, label: 'Доллар'},
        {value: 3, label: 'Рубль'}
    ]

    function handleChange(selectedCurrencyOption: any) {
        setValue('currency', selectedCurrencyOption.value);
    }


    // вместо обращения к ссылке на useModal, использую его состояния
    const {isOpen, close} = useModal()

    useEffect(() => {
        if(isOpen){
            document.body.style.overflowY = 'hidden'
            document.body.style.overflowX = 'hidden'
        } else{
            document.body.style.overflowY = 'visible'
            document.body.style.overflowX = 'hidden'
        }
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('company')} defaultValue={10} readOnly/>
                    <div className={styles.modalWindow__background}>
                        <div className={styles.modalWindow}>
                            <div className={styles.close} onClick={close}>&#215;</div>
                            <GAS_header/>
                            <div className={styles.orderContainer}>
                                <GAS_addImage/>
                                <div className={styles.orderVertical}>
                                    <div className={styles.orderName}>
                                        <h4 className={styles.orderHeader}>Введите название товара или услуги</h4>
                                        <input
                                        className={styles.input_1}
                                        type="text"
                                        placeholder="Название товара или услуги"
                                        {...register('product_name')}
                                        onChange={(e) => setValue('product_name', e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.orderDescription}>
                                        <h4 className={styles.orderHeader}>Описание товара или услуги</h4>
                                        <input
                                        className={styles.input_2}
                                        type="text"
                                        placeholder="Данный товар..."
                                        {...register('product_description')}
                                        onChange={(e) => setValue('product_description', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.orderVertical}>
                                <h4 className={styles.orderHeader}>Характеристики товара/услуги</h4>
                                <input
                                className={styles.input_3}
                                type="text"
                                placeholder="У этого товара..."
                                {...register('characteristics')}
                                onChange={(e) => setValue('characteristics', e.target.value)}
                                />
                            </div>
                            <div className={styles.orderContainer_2}>
                                <div className={styles.orderDescription}>
                                    <h4 className={styles.orderHeader}>Цена</h4>
                                    <input
                                    className={styles.input_4}
                                    type="number"
                                    placeholder="150000"
                                    {...register('price')}
                                    onChange={(e) => setValue('price', parseInt(e.target.value))}
                                    />
                                </div>
                                <div className={styles.orderHorizontal}>
                                <Select
                                defaultValue={currency}
                                options={priceOption}
                                onChange={handleChange}
                                classNamePrefix='custom-select'
                                />
                                </div>
                            </div>
                            <div className={styles.select__block}>
                                <h4 className={styles.orderHeader}>Категория</h4>
                                <Select
                                defaultValue={categories}
                                options={options}
                                onChange={changeCategories}
                                classNamePrefix='custom-select'
                                /> 
                            </div>
                            <h4 className={styles.orderHeader}>Выбор наличия вашего товара/услуги</h4>
                            <GAS_changeOrder/>
                            <GAS_addOrderBtn type="submit"/>
                        </div>
                    </div>
                </form>
            )}
        </>
    )
}
