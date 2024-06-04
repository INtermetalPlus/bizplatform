import React from 'react'
import styles from './style.module.scss'

const products = [
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: false,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: true,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: false,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: true,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: false,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: true,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: false,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
	{
		productImg:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-13-pink-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986449',
		productName: 'Ветровка джинсовая',
		available: true,
		price: '1200 сом',
		description: 'Женская ветровка, на осень/весну. Материал: холодок',
		place: 'Место отправки:',
		placeCity: 'Москва',
	},
]

export const GoodsAndServicesBlock = () => {
	return (
		<div className={styles.GoodsAndServicesBlock}>
			<h2>Товары и услуги</h2>
			<div className={styles.products}>
				{products.map((products, index) => (
					<div key={index} className={styles.product}>
						<img
							className={styles.productImg}
							src={products.productImg}
							alt='logo'
						/>
						{products.available ? (
							<p className={styles.available}>В наличии</p>
						) : (
							<p className={styles.notAvailable}>Нет в наличии</p>
						)}

						<div className={styles.info}>
							<h5 className={styles.productName}>{products.productName}</h5>
							<h6 className={styles.price}>{products.price}</h6>
							<p className={styles.description}>{products.description}</p>
							<p className={styles.place}>
								{products.place}
								<h6 className={styles.placeCity}>{products.placeCity}</h6>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
