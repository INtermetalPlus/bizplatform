'use client'
import React from 'react'
import styles from './style.module.scss'
import {useProductStore} from '@/widgets/ProductSlider/WriteToTheSupplierModal/store'

interface Props {
  onClose: () => void;
}

export const WriteToTheSupplierModal: React.FC<Props> = ({ onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addProductAsync = useProductStore(state => state.addProductAsync)

	const handleClick = async () => {
		const newProduct = {
			name: 'Kolya',
			surname: 'Kolya',
			phone_number: '123456789',
			email: 'user@example.com',
		}
		await addProductAsync(newProduct)
	}

  return (
		<div className={styles.writeToTheSupplierModal} onClick={handleOutsideClick}>
			<div className={styles.container}>
				<h2>Написать поставщику</h2>
				<span>
					В данном поле вы можете ввести предложение или вопрос заказчику о его
					товаре или услуге.
				</span>
				<svg
					onClick={onClose}
					className={styles.closeIcon}
					xmlns='http://www.w3.org/2000/svg'
					width='14'
					height='14'
					viewBox='0 0 14 14'
					fill='none'
				>
					<path
						d='M13 1L1 13M1 1L13 13'
						stroke='#0B1623'
						stroke-width='2'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
				<div className={styles.inputs}>
					<div className={styles.nameAndSurname}>
						<div className={styles.name}>
							<h3>Имя</h3>
							<input type='text' placeholder='Ваше имя' />
						</div>
						<div className={styles.surname}>
							<h3>
								Фамилия
								<p> (необязательно)</p>
							</h3>
							<input type='text' placeholder='Ваша фамилия' />
						</div>
					</div>

					<div className={styles.offer}>
						<h3>Введите предложение или вопрос заказчику</h3>
						<input
							type='text'
							placeholder='У меня есть предложение/вопрос...'
						/>
					</div>

					<div className={styles.numberAndEmail}>
						<div className={styles.number}>
							<h3>Номер телефона</h3>
							<input type='text' placeholder='+996' />
						</div>
						<div className={styles.email}>
							<h3>Электронная почта</h3>
							<input type='text' placeholder='email@gmail.com' />
						</div>
					</div>
				</div>
				<p>
					Нажимая кнопку «Отправить », вы соглашаетесь с условиями использования
					и обработкой персональных данных.
				</p>
				<button onClick={handleClick}>Отправить</button>
			</div>
		</div>
	)
}

export default WriteToTheSupplierModal