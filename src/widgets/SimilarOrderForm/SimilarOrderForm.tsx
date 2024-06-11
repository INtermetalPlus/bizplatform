import React from "react";
import styles from './SOF_UI.module.scss'
import './Select_UI.scss'
import '../../app/globalStyle.css'
import { SOF_header } from "@/shared/ui/SimilarOrderForm/SOF_header";
import { SOF_secondHeader } from "@/shared/ui/SimilarOrderForm/SOF_secondHEader";
import { SOF_offerToCustomer } from "@/shared/ui/SimilarOrderForm/SOF_offerToCustomer";
import { SOF_price } from "@/shared/ui/SimilarOrderForm/SOF_price";
import { SOF_companyName } from "@/shared/ui/SimilarOrderForm/SOF_companyName";
import { SOF_deliveryTIme } from "@/shared/ui/SimilarOrderForm/SOF_deliveryTIme";
import { SOF_phoneNumber } from "@/shared/ui/SimilarOrderForm/SOF_phoneNumber";
import { SOF_email } from "@/shared/ui/SimilarOrderForm/SOF_email";
import Select from 'react-select'
import { SelectFile } from "@/shared/ui/OtherUI/SelectFile";
import { SOF_submitBtn } from "@/shared/ui/SimilarOrderForm/SOF_submitBtn";
import { SOP_tarrifModal } from "@/features/lib/helpers/CustomHook";


export const SimilarOrderForm: React.FC = () => {
    const currency = {value: 0, label: 'Валюта'}
    const currencyOption = [
        {value: 1, label: 'Сом'},
        {value: 2, label: 'Доллар'},
        {value: 3, label: 'Рубль'}
    ]




    

    return (
        <>
            <form className={styles.similar_form}>
                <SOF_header/>
                <SOF_secondHeader/>
                <SOF_offerToCustomer/>
                <textarea
                placeholder="У меня есть предложение/вопрос..."
                className={styles.similar_form__offer_customer}
                >
                </textarea>
                <SOF_price/>
                <div className={styles.form_container}>
                    <input 
                    type="number"
                    placeholder="100000000"
                    className={styles.inputs}
                    />
                    <Select
                    defaultValue={currency}
                    options={currencyOption}
                    // onChange={(value) => setValue('currency', value?.value || 0)}
                    classNamePrefix='supply-unit'
                    />
                </div>
                <div className={styles.form_container}>
                    <div>
                        <SOF_companyName/>
                        <input 
                        type="text"
                        placeholder="Название"
                        className={styles.inputs}
                        />
                    </div>
                    <div>
                        <SOF_deliveryTIme/>
                        <input 
                        type="text"
                        placeholder="6 дней..."
                        className={styles.inputs}
                        />
                    </div>
                </div>
                <div className={styles.contacts_container}>
                    <div>
                        <SOF_phoneNumber/>
                        <input 
                        type="number"
                        placeholder="+996..."
                        className={styles.inputs}
                        />
                    </div>
                    <div>
                        <SOF_email/>
                        <input 
                        type="number"
                        placeholder="email@gmail.com"
                        className={styles.inputs}
                        />
                    </div>
                </div>
                <div className={styles.form_container}>
                    <SelectFile/>
                    <SOF_submitBtn/>
                </div>
            </form>
        </>
    )
}