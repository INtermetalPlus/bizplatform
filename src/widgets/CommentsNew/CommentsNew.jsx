import React from 'react'
import styles from './style.module.scss'

const reviews = [
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
    commentDate: '16.04.2024',
	},
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
    commentDate: '16.04.2024',
	},
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
    commentDate: '16.04.2024',
	},
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
    commentDate: '16.04.2024',
	},
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
    commentDate: '16.04.2024',
	},
	{
		logoSrc:
			'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
		companyName: 'Паланча Паланчаев',
		companyDescription: 'Покупатель',
		commentText:
			'Я работаю с множеством оптовых поставщиков, но сотрудничество с вашей компанией действительно выделяется. Ваши товары всегда высокого качества, доставка проходит быстро и без проблем, а ваша команда всегда готова помочь и ответить на все вопросы.',
		commentDate: '16.04.2024',
	},
]

export const CommentsNew = () => {
	return (
		<div className={styles.main}>
			<div className={styles.headerComment}>
				<h2>Отзывы пользователей</h2>
				<label>Все отзывы</label>
			</div>
			<div className={styles.comments}>
				{reviews.length > 0 ? (
					reviews.map((review, index) => (
						<div key={index} className={styles.comment}>
							<div className={styles.info}>
								<img src={review.logoSrc} alt='logo' />
								<div className={styles.companyInfo}>
									<h6>{review.companyName}</h6>
									<p>{review.companyDescription}</p>
								</div>
								<div className={styles.stars}>
									{[...Array(5)].map((_, starIndex) => (
										<svg
											key={starIndex}
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='22'
											viewBox='0 0 24 22'
											fill='none'
										>
											<path
												d='M12 0L14.8919 8.01964L23.4127 8.2918L16.6792 13.5204L19.0534 21.7082L12 16.92L4.94658 21.7082L7.3208 13.5204L0.587322 8.2918L9.1081 8.01964L12 0Z'
												fill='#FCC153'
											/>
										</svg>
									))}
								</div>
							</div>
							<p className={styles.commentText}>{review.commentText}</p>
							<p className={styles.commentDate}>{review.commentDate}</p>
						</div>
					))
				) : (
					<p className={styles.noComments}>Нет отзывов</p>
				)}
			</div>
		</div>
	)
}
