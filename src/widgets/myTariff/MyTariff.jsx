import React from 'react'
import styles from './style.module.scss'

export const MyTariff = () => {
  return (
		<div className={styles.MyTariffBlock}>
			<div className={styles.container}>
				<div className={styles.MyTariffTitle}>
					<h1>Мой тариф</h1>
				</div>
				<div className={styles.tariffBlock}>
					<div className={styles.ribbonBlock}>
            <div className={styles.ribbonSmall}></div>
						<div className={styles.ribbon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='140'
								height='140'
								viewBox='0 0 140 140'
								fill='none'
							>
								<path
									d='M96.8267 33.748C96.4474 33.3266 95.9071 33.0859 95.3402 33.0859H44.6598C44.0929 33.0859 43.5526 33.3266 43.1733 33.748L25.9793 52.8513C25.3417 53.5597 25.2925 54.6196 25.8619 55.384L68.5991 112.762C69.4011 113.839 71.0152 113.835 71.8123 112.755L114.148 55.3823C114.712 54.6181 114.661 53.5628 114.026 52.8569L96.8267 33.748Z'
									fill='#BFD1FF'
								/>
								<path
									d='M96.2316 33.0859L115.118 54.0695H71.0508L96.2316 33.0859Z'
									fill='#91B0FF'
								/>
								<path
									d='M89.9356 54.0703L70.1278 114.817L69.9993 114.645L50.063 54.0703H89.9356Z'
									fill='#7A9FFF'
								/>
								<path
									d='M71.05 54.0695H24.8828L43.7691 33.0859L71.05 54.0695Z'
									fill='#91B0FF'
								/>
							</svg>
						</div>
					</div>

					<div className={styles.tariff}>
						<h2>
							Поставщик <h2 className={styles.premium}>Премиум</h2>
						</h2>
						<h3>300 USD</h3>
						<p>1 год</p>
						<ul>
							<ul>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<rect width='24' height='24' fill='#3971FF' />
									<path
										d='M20 6L9 17L4 12'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Возможность разместить 10 заказов
							</ul>
							<ul>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<rect width='24' height='24' fill='#3971FF' />
									<path
										d='M20 6L9 17L4 12'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Возможность разместить 10 заказов
							</ul>
							<ul>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<rect width='24' height='24' fill='#3971FF' />
									<path
										d='M20 6L9 17L4 12'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Возможность разместить 10 заказов
							</ul>
							<ul>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
								>
									<rect width='24' height='24' fill='#3971FF' />
									<path
										d='M20 6L9 17L4 12'
										stroke='white'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								Возможность разместить 10 заказов
							</ul>
						</ul>
					</div>
					<div className={styles.footer}>
						<p>С 20.02.2023</p>
						<button>Поменять тариф</button>
					</div>
				</div>
			</div>
		</div>
	)
}

