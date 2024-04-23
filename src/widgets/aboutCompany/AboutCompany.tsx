import React from "react";
import {inspect} from "util";
import styles from "./AboutCompany.module.scss"
import Image from "next/image";
import geoIcon from "./../../shared/assets/home/contact/geolocation_icon.png"
import emailIcon from "./../../shared/assets/home/contact/email_icon.png"
import phoneIcon from "./../../shared/assets/home/contact/phone_icon.png"
import cashIcon from "./../../shared/assets/home/aboutCompany/cash_icon.png"
import busIcon from "./../../shared/assets/home/aboutCompany/bus_icon.png"
import carParkIcon from "./../../shared/assets/home/aboutCompany/carPark_icon.png"
import cashlessIcon from "./../../shared/assets/home/aboutCompany/cashless_icon.png"
import basketIcon from "./../../shared/assets/home/aboutCompany/basket_icon.png"

export const AboutCompany: React.FC = () => {
    return (
        <section className={styles.company}>
            <div className="container">
                <div className={styles.company_blocks}>
                    <h2 className={styles.company_h2}>О компании</h2>
                    <div className={styles.company_profile}>
                        <div className={`${styles.companyActivity} ${styles.child_blocks}`}>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Деятельность компании</h3>
                                <p className={styles.companyActivity_largeText}>Lorem ipsum dolor sit amet consectetur. Gravida euismod a amet pulvinar diam id quisque erat in. Maecenas quam eget mi nunc. Sit rhoncus nibh mollis commodo accumsan ultrices varius. Etiam sed porttitor ac est feugiat pellentesque.</p>
                            </div>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Сферы деятельности</h3>
                                <p className={styles.companyActivity_text}>Продажа жилой недвижимости</p>
                            </div>
                        </div>
                        <div className={`${styles.contact_info} ${styles.child_blocks}`}>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Регионы работы</h3>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={geoIcon}
                                        width={24}
                                        height={24}
                                        alt="geolocation"/>
                                    <p className={styles.companyActivity_text}>Бишкек</p>
                                </div>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={geoIcon}
                                        width={24}
                                        height={24}
                                        alt="geolocation"/>
                                    <p className={styles.companyActivity_text}>Россия</p>
                                </div>
                            </div>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Контакты</h3>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={emailIcon}
                                        width={20}
                                        height={16}
                                        alt="email"/>
                                    <p className={styles.companyActivity_text}>meyman@gmail.com</p>
                                </div>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={phoneIcon}
                                        width={24}
                                        height={24}
                                        alt="phone"/>
                                    <p className={styles.companyActivity_text}>+996 705 24 24 54</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.checkout_options} ${styles.child_blocks}`}>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Способы оплаты</h3>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={cashIcon}
                                        width={20}
                                        height={16}
                                        alt="icon"/>
                                    <p className={styles.companyActivity_text}>Наличный расчет</p>
                                </div>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={cashlessIcon}
                                        width={20}
                                        height={14}
                                        alt="icon"/>
                                    <p className={styles.companyActivity_text}>Безналичный расчет</p>
                                </div>
                            </div>
                            <div className={styles.info_text}>
                                <h3 className={styles.companyProfile__header}>Способы доставки</h3>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={basketIcon}
                                        width={24}
                                        height={24}
                                        alt="icon"/>
                                    <p className={styles.companyActivity_text}>Самовывоз</p>
                                </div>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={carParkIcon}
                                        width={24}
                                        height={24}
                                        alt="icon"/>
                                    <p className={styles.companyActivity_text}>Автопарк компании</p>
                                </div>
                                <div className={styles.contactInfo__location}>
                                    <Image
                                        src={busIcon}
                                        width={24}
                                        height={24}
                                        alt="icon"/>
                                    <p className={styles.companyActivity_text}>Транспортная компания</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.company_requisites} ${styles.child_blocks}`}>
                        <h3 className={styles.companyProfile__header}>Реквизиты</h3>
                        <div className={styles.company_requisites_text}>
                            <div className={styles.company_requisites_text_block}>
                                <div className={styles.company_requisites_text_child}>
                                    <span className={styles.requisites_data}>ИНН</span>
                                    <p className={styles.companyActivity_text}>8622005136</p>
                                </div>
                                <div className={styles.company_requisites_text_child}>
                                    <span className={styles.requisites_data}>КПП</span>
                                    <p className={styles.companyActivity_text}>8622005136</p>
                                </div>
                                <div className={styles.company_requisites_text_child}>
                                    <span className={styles.requisites_data}>ОГРН</span>
                                    <p className={styles.companyActivity_text}>8622005136</p>
                                </div>
                                <div className={styles.company_requisites_text_child}>
                                    <span className={styles.requisites_data}>ОКПО</span>
                                    <p className={styles.companyActivity_text}>8622005136</p>
                                </div>
                                <div className={styles.company_requisites_text_child}>
                                    <span className={styles.requisites_data}>ОКВЭД</span>
                                    <p className={styles.companyActivity_text}>8622005136</p>
                                </div>
                            </div>
                            <div className={styles.requisitesNum}>
                                <div className={styles.requisitesNumChild}>
                                    <span className={styles.requisites_data}>Расчетный счет</span>
                                    <p className={styles.companyActivity_text}>40702810213500000859</p>
                                </div>
                                <div className={styles.requisitesNumChild}>
                                    <span className={styles.requisites_data}>Корреспондентский счет</span>
                                    <p className={styles.companyActivity_text}>40702810213500000859</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}