'use client'
import React from 'react'
import styles from './GAS_shared.module.scss'
import useModalStore from '@/shared/ui/GoodsAndServices/store'
import { AddProductModal } from '@/widgets/AllOrder/AddProductModal/AddProductModal'

export const GAS_PlaceProduct: React.FC = () => {
	const { isModalOpen, openModal, closeModal } = useModalStore()
<<<<<<< HEAD

=======
	
>>>>>>> 41654f679fa483874468ba132ce8dd49ec713b09
	return (
		<>
			<button onClick={openModal} className={styles.placeProductBtn}>
				Разместить товар
			</button>
			{isModalOpen && <AddProductModal onClose={closeModal} />}
		</>
	)
}
