import React from 'react'
import styles from './style.module.scss'

export const MyOrders = () => {
  return (
		<div className={styles.MyOrdersBlock}>
			<div className={styles.container}>
				<div className={styles.MyOrdersTitle}>
					<h1>Мои заказы</h1>
					<h4>Разместить свой заказ</h4>
				</div>

				<div className={styles.orderData}>
					<div className={styles.orderDescription}>
						<p>Введите наименование товара или услуги</p>
						<input
							className={styles.input}
							type='text'
							placeholder='Наименование товара или услуги'
						/>
						<p>Описание товара</p>
						<input
							className={styles.bigInput}
							type='text'
							placeholder='У этого товара'
						/>
					</div>

					<div className={styles.orderCategory}>
						<div className={styles.category}>
							<p className={styles.categoryTitle}>Поставщики из</p>
							<button>Выбрать регион +</button>
						</div>

						<div className={styles.category}>
							<p className={styles.categoryTitle}>Поставка в</p>
							<button>Выбрать регион +</button>
						</div>

						<div className={styles.category}>
							<p className={styles.categoryTitle}>Номер телефона</p>
							<input type='text' placeholder='+996' />
						</div>

						<div className={styles.category}>
							<p className={styles.categoryTitle}>Электронная почта</p>
							<input type='text' placeholder='email@gmail.com' />
						</div>

						<div className={styles.category}>
							<p className={styles.categoryTitle}>Категория</p>
							<button className={styles.choice}>
								Автотовары
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='14'
									height='8'
									viewBox='0 0 14 8'
									fill='none'
								>
									<path
										d='M1 1L7 7L13 1'
										stroke='#0B1623'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</button>
						</div>

						<button>Найти поставщиков</button>
					</div>
				</div>
			</div>
		</div>
	)
}

