'use client'
import React, { useState } from 'react'
import styles from './style.module.scss'
import { motion, AnimatePresence, wrap } from 'framer-motion'
import useModalStore from '@/widgets/ProductSlider/WriteToTheSupplierModal/store'
import  WriteToTheSupplierModal from '@/widgets/ProductSlider/WriteToTheSupplierModal/WriteToTheSupplierModal'

const images = [
	'https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14/starlight/wwen_iphone14_q422_starlight_pdp_image_position-1a-450x450.webp',

	'https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-450x450.webp',

	'https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14plus/yellow/rukz_iphone14plus_q223_yellow_pdp_image_position-1a-450x450.webp',

	'https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14/midnight/wwen_iphone14_q422_midnight_pdp_image_position-1a-450x450.webp',

	'https://asiastore.kg/image/cachewebp/catalog/iphone/iphone14/iphone14/blue/wwen_iphone14_q422_blue_pdp_image_position-1a-450x450.webp',
]

    const variants = {
			enter: (direction: number) => {
				return {
					duration: 0.1,
					y: direction > 0 ? 270 : 270,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}
			},
			center: {
				y: 0,
				opacity: 1,
			},
			exit: (direction: number) => {
				return {
					y: direction < 0 ? 270 : -270,
          duration: 0.1,
					transition: { duration: 0.3, ease: 'easeInOut' },
				}
			},
		}


		

const ProductSlider = () => {

	const { isModalOpen, openModal, closeModal } = useModalStore()

  const [[page, direction], setPage] = useState([0, 0]);
  const firstImageIndex = wrap(0, images.length, page)
	const secondImageIndex = wrap(0, images.length, page + 1)


  const paginate = (newDirection: number) => {
    const totalPages = images.length;
    let newPage = page + newDirection;
  
    if (newPage < 0) {
      newPage = totalPages - 1; 
    } else if (newPage > totalPages) {
      newPage = 0;
    }
  
    setPage([newPage, newDirection]);
  };
  

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
  };

  return (
		<div className={styles.ProductSliderBlock}>
			<div className={styles.container}>
				<div className={styles.category}>
					<a href=''>Все заказы </a>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='8'
						height='14'
						viewBox='0 0 8 14'
						fill='none'
					>
						<path
							d='M1 13L7 7L1 1'
							stroke='#A0A0A0'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>

					<a href=''>Автотовары </a>

					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='8'
						height='14'
						viewBox='0 0 8 14'
						fill='none'
					>
						<path
							d='M1 13L7 7L1 1'
							stroke='#A0A0A0'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>

					<h5>Товар</h5>
				</div>

				<div className={styles.product}>
					<div className={styles.productImgAndProvider}>
						<div className={styles.productImages}>
							<img
								className={styles.productImage}
								src='https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg'
								alt='product'
							/>
							<div className={styles.slider}>
								<div
									className={styles.sliderButton1}
									onClick={() => paginate(1)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='8'
										height='14'
										viewBox='0 0 8 14'
										fill='none'
									>
										<path
											d='M1 13L7 7L1 1'
											stroke='black'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
								<AnimatePresence initial={false} custom={direction}>
									<motion.img
										key={firstImageIndex}
										src={images[firstImageIndex]}
										className={styles.productSmallImage}
										variants={variants}
										initial='enter'
										animate='center'
										exit='exit'
									/>
									<motion.img
										className={styles.productSmallImage}
										key={secondImageIndex + 1}
										src={images[secondImageIndex]}
										variants={variants}
										initial='enter'
										animate='center'
										exit='exit'
									/>
								</AnimatePresence>
								<div
									className={styles.sliderButton2}
									onClick={() => paginate(-1)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='8'
										height='14'
										viewBox='0 0 8 14'
										fill='none'
									>
										<path
											d='M1 13L7 7L1 1'
											stroke='black'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className={styles.provider}>
							<h2>
								Поставщик
								<svg
									className={styles.diamondIcon}
									xmlns='http://www.w3.org/2000/svg'
									width='28'
									height='25'
									viewBox='0 0 28 25'
									fill='none'
								>
									<path
										d='M2.12393 9.25H25.8739M11.4989 1.75L8.99893 9.25L13.9989 23.625L18.9989 9.25L16.4989 1.75M14.7672 23.3281L25.9654 9.89018C26.1552 9.66244 26.2501 9.54857 26.2864 9.42146C26.3184 9.30939 26.3184 9.19061 26.2864 9.07854C26.2501 8.95143 26.1552 8.83756 25.9654 8.60981L20.5488 2.10982C20.4386 1.97755 20.3835 1.91142 20.3159 1.86388C20.256 1.82176 20.1893 1.79048 20.1186 1.77146C20.0388 1.75 19.9527 1.75 19.7806 1.75H8.21731C8.04514 1.75 7.95906 1.75 7.87929 1.77146C7.80861 1.79048 7.74182 1.82176 7.68197 1.86388C7.61441 1.91142 7.5593 1.97756 7.44909 2.10982L2.03242 8.60981C1.84263 8.83756 1.74774 8.95143 1.71148 9.07854C1.67951 9.19061 1.67951 9.30938 1.71148 9.42145C1.74774 9.54857 1.84263 9.66244 2.03242 9.89018L13.2307 23.3281C13.4945 23.6447 13.6264 23.803 13.7844 23.8607C13.9229 23.9114 14.0749 23.9114 14.2135 23.8607C14.3714 23.803 14.5033 23.6447 14.7672 23.3281Z'
										stroke='#0B1623'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
								<svg
									className={styles.checkMArcIcon}
									xmlns='http://www.w3.org/2000/svg'
									width='28'
									height='28'
									viewBox='0 0 28 28'
									fill='none'
								>
									<path
										d='M8.375 14L12.125 17.75L19.625 10.25M26.5 14C26.5 20.9036 20.9036 26.5 14 26.5C7.09644 26.5 1.5 20.9036 1.5 14C1.5 7.09644 7.09644 1.5 14 1.5C20.9036 1.5 26.5 7.09644 26.5 14Z'
										stroke='#0B1623'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</h2>

							<a href=''>Название компании</a>
							<p>Бишкек</p>
						</div>
					</div>
					<div className={styles.productInfo}>
						<h5>
							В наличии
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='21'
								height='23'
								viewBox='0 0 21 23'
								fill='none'
							>
								<path
									d='M18.5 6.77775L9.99997 11.5M9.99997 11.5L1.49997 6.77775M9.99997 11.5L10 21M12 20.3889L10.777 21.0683C10.4934 21.2259 10.3516 21.3047 10.2015 21.3355C10.0685 21.3629 9.93146 21.3629 9.79855 21.3355C9.64838 21.3047 9.50658 21.2259 9.22297 21.0683L1.82297 16.9572C1.52346 16.7908 1.37368 16.7076 1.26463 16.5893C1.16816 16.4846 1.09515 16.3605 1.05048 16.2253C1 16.0725 1 15.9012 1 15.5586V7.44145C1 7.0988 1 6.92748 1.05048 6.77468C1.09515 6.63951 1.16816 6.51543 1.26463 6.41074C1.37368 6.2924 1.52345 6.2092 1.82297 6.0428L9.22297 1.93168C9.50657 1.77413 9.64838 1.69535 9.79855 1.66446C9.93146 1.63713 10.0685 1.63713 10.2015 1.66446C10.3516 1.69535 10.4934 1.77412 10.777 1.93168L18.177 6.04279C18.4766 6.2092 18.6263 6.2924 18.7354 6.41073C18.8318 6.51542 18.9049 6.63951 18.9495 6.77468C19 6.92748 19 7.0988 19 7.44145L19 12M5.5 4L14.5 9M14 17.5L16 19.5L20 15.5'
									stroke='black'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</h5>
						<h3>Ветровка с отстегивающимся капюшоном, цвета разные</h3>
						<h4>от 1200с за 1шт.</h4>
						<span className={styles.desc}>
							Эта ветровка - идеальное сочетание стиля и функциональности. Её
							легкий материал защитит от ветра и неблагоприятных погодных
							условий, а отстёгивающийся капюшон добавит удобства и позволит вам
							подстраивать свой образ под изменчивые обстоятельства. Благодаря
							стильному дизайну и разнообразию цветовых вариантов, эта ветровка
							станет незаменимой частью вашего гардероба как в повседневной
							жизни, так и во время активного отдыха на природе.
						</span>

						<div className={styles.characteristics}>
							<h3>
								Характеристики:
								<span> Масса,кг - 500г.</span>
								<span> Производство: Германия,</span>
								<span> Модель - Afrona,</span>
								<span> Гарантия - 3 месяца,</span>
								<span> материал - холодок</span>
							</h3>
						</div>

						<div className={styles.teg}>
							<h3>
								Категория:
								<span> Одежда</span>
							</h3>
							<h3>
								Место отправки:
								<span> Москва</span>
							</h3>
						</div>
						<button onClick={openModal}>Написать поставщику</button>
						{isModalOpen && <WriteToTheSupplierModal onClose={closeModal} />}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductSlider