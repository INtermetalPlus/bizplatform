import styles from './style.module.scss'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import ContactImg from '../../../public/contacts.png'
import OrdersImg from '../../../public/orders.png'
import VisitorsImg from '../../../public/visitors.svg'
import React from 'react'
import ProductImg from '../../../public/product.svg'

export const About:React.FC = ():React.JSX.Element => {
	return (
		<div className={styles.aboutPlatform}>
			<div className={styles.container}>
				<div className={styles.about}>
					<h1>О платформе</h1>
					<span>
						IBP — платформа для малого и среднего бизнеса, сайт для оптовых
						покупателей и продавцов. Помогаем компаниям России и СНГ быстро
						находить лучших поставщиков и новых клиентов, продвигать свою
						продукцию в интернете.
					</span>
				</div>
				<div className={styles.sale}>
					<div className={styles.customers}>
						<h2>Оптовым покупателям</h2>
						<span>
							Упрощаем процесс закупки, позволяем быстро находить лучших
							поставщиков и экономить до 40%.
						</span>
						<Button text='Найти поставщиков' />
					</div>
					<div className={styles.customers}>
						<h2>Оптовым продавцам</h2>
						<span>
							Получайте новых клиентов – ежедневно на платформе компании
							размещают больше 1500 заказов на поиск поставщика.
						</span>
						<Button text='Найти клиентов' />
					</div>
				</div>
				<div className={styles.statistics}>
					<div className={styles.examples}>
						
					<div className={styles.example}>
						<Image
							src={OrdersImg}
							alt='point'
							width={126}
							height={119}
						/>
						<h2>650</h2>
						<p>городов России и СНГ</p>
					</div>
					<div className={styles.example}>
						<Image
							src={VisitorsImg}
							width={78}
							height={120}
							alt='point'
						/>
						<h2>400 000</h2>
						<p>посетителей сайта в месяц</p>
					</div>
					<div className={styles.example}>
						<Image
							src={ContactImg}
							alt='point'
							width={65}
							height={112}
						/>
						<h2>1 766 720</h2>
						<p>оптовых заказов</p>
					</div>
					<div className={styles.example}>
						<Image
							src={ProductImg}
							alt='point'
							width={96}
							height={120}
						/>
						<h2>13 863 858</h2>
						<p>товаров в каталоге</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}


