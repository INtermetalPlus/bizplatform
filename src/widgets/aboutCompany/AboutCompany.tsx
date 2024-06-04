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
				<div className='container'>
					<div className={styles.company_blocks}>
						<h2 className={styles.company_h2}>О компании</h2>
						<div className={styles.company_profile}>
							<div
								className={`${styles.companyActivity} ${styles.child_blocks}`}
							>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>
										Деятельность компании
									</h3>
									<p className={styles.companyActivity_largeText}>
										Lorem ipsum dolor sit amet consectetur. Gravida euismod a
										amet pulvinar diam id quisque erat in. Maecenas quam eget mi
										nunc. Sit rhoncus nibh mollis commodo accumsan ultrices
										varius. Etiam sed porttitor ac est feugiat pellentesque.
									</p>
								</div>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>
										Сферы деятельности
									</h3>
									<p className={styles.companyActivity_text}>
										Продажа жилой недвижимости
									</p>
								</div>
							</div>
							<div className={`${styles.contact_info} ${styles.child_blocks}`}>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>
										Регионы работы
									</h3>
									<div className={styles.contactInfo__location}>
										<Image
											src={geoIcon}
											width={24}
											height={24}
											alt='geolocation'
										/>
										<p className={styles.companyActivity_text}>Бишкек</p>
									</div>
									<div className={styles.contactInfo__location}>
										<Image
											src={geoIcon}
											width={24}
											height={24}
											alt='geolocation'
										/>
										<p className={styles.companyActivity_text}>Россия</p>
									</div>
								</div>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>Контакты</h3>
									<div className={styles.contactInfo__location}>
										<Image src={emailIcon} width={20} height={16} alt='email' />
										<p className={styles.companyActivity_text}>
											meyman@gmail.com
										</p>
									</div>
									<div className={styles.contactInfo__location}>
										<Image src={phoneIcon} width={24} height={24} alt='phone' />
										<p className={styles.companyActivity_text}>
											+996 705 24 24 54
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.checkout_options} ${styles.child_blocks}`}
							>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>
										Способы оплаты
									</h3>
									<div className={styles.contactInfo__location}>
										<Image src={cashIcon} width={20} height={16} alt='icon' />
										<p className={styles.companyActivity_text}>
											Наличный расчет
										</p>
									</div>
									<div className={styles.contactInfo__location}>
										<Image
											src={cashlessIcon}
											width={20}
											height={14}
											alt='icon'
										/>
										<p className={styles.companyActivity_text}>
											Безналичный расчет
										</p>
									</div>
								</div>
								<div className={styles.info_text}>
									<h3 className={styles.companyProfile__header}>
										Способы доставки
									</h3>
									<div className={styles.contactInfo__location}>
										<Image src={basketIcon} width={24} height={24} alt='icon' />
										<p className={styles.companyActivity_text}>Самовывоз</p>
									</div>
									<div className={styles.contactInfo__location}>
										<Image
											src={carParkIcon}
											width={24}
											height={24}
											alt='icon'
										/>
										<p className={styles.companyActivity_text}>
											Автопарк компании
										</p>
									</div>
									<div className={styles.contactInfo__location}>
										<Image src={busIcon} width={24} height={24} alt='icon' />
										<p className={styles.companyActivity_text}>
											Транспортная компания
										</p>
									</div>
								</div>
							</div>
						</div>

						<h3 className={styles.companyRequisites__header}>Реквизиты</h3>
						<div
							className={`${styles.company_requisites} ${styles.child_blocks}`}
						>
							<div className={styles.company_requisites_text}>
								<div className={styles.company_requisites_text_block}>
									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>ИНН</span>
										<p className={styles.requisites_p}>8622005136</p>
										<svg
                                            className={styles.requisites_svg}
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>КПП</span>
										<p className={styles.requisites_p}>8622005136</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>ОГРН</span>
										<p className={styles.requisites_p}>8622005136</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>ОКПО</span>
										<p className={styles.requisites_p}>8622005136</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>ОКВЭД</span>
										<p className={styles.requisites_p}>8622005136</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>

									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>
											Расчетный счет
										</span>
										<p className={styles.requisites_p}>67890987675687563451</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>

									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>
											Корреспондентский счет
										</span>
										<p className={styles.requisites_p}>67890987675694520502</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>

									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>БИК</span>
										<p className={styles.requisites_p}>042202603</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>

									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>
											Дата регистрации
										</span>
										<p className={styles.requisites_p}>15 апреля 2020 года</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>

									<div className={styles.company_requisites_text_child}>
										<span className={styles.requisites_data}>Адрес</span>
										<p className={styles.requisites_p}>
											Улица Ленина, дом 123, офис 45 г. Бишкек, Чуйская область,
											Кыргызстан
										</p>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28'
											height='28'
											viewBox='0 0 28 28'
											fill='none'
										>
											<path
												d='M19 9V5.5C19 4.09987 19 3.3998 18.7275 2.86502C18.4878 2.39462 18.1054 2.01217 17.635 1.77248C17.1002 1.5 16.4001 1.5 15 1.5H5.5C4.09987 1.5 3.3998 1.5 2.86502 1.77248C2.39462 2.01217 2.01217 2.39462 1.77248 2.86502C1.5 3.3998 1.5 4.09987 1.5 5.5V15C1.5 16.4001 1.5 17.1002 1.77248 17.635C2.01217 18.1054 2.39462 18.4878 2.86502 18.7275C3.3998 19 4.09987 19 5.5 19H9M13 26.5H22.5C23.9001 26.5 24.6002 26.5 25.135 26.2275C25.6054 25.9878 25.9878 25.6054 26.2275 25.135C26.5 24.6002 26.5 23.9001 26.5 22.5V13C26.5 11.5999 26.5 10.8998 26.2275 10.365C25.9878 9.89462 25.6054 9.51217 25.135 9.27248C24.6002 9 23.9001 9 22.5 9H13C11.5999 9 10.8998 9 10.365 9.27248C9.89462 9.51217 9.51217 9.89462 9.27248 10.365C9 10.8998 9 11.5999 9 13V22.5C9 23.9001 9 24.6002 9.27248 25.135C9.51217 25.6054 9.89462 25.9878 10.365 26.2275C10.8998 26.5 11.5999 26.5 13 26.5Z'
												stroke='#88AAFF'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}