'use client'
<<<<<<< HEAD
import React from 'react'
import styles from './GAS_shared.module.scss'
import useModalStore from '@/shared/ui/GoodsAndServices/store'
import { AddProductModal } from '@/widgets/AllOrder/AddProductModal/AddProductModal'

export const GAS_PlaceProduct: React.FC = () => {
	const { isModalOpen, openModal, closeModal } = useModalStore()
=======
import React, { useEffect } from "react";
import styles from './GAS_shared.module.scss'
import { useModal } from "@/features/lib/GAS_modalWindowHook";


export const GAS_PlaceProduct: React.FC = () => {
    const {open} = useModal()

    return (
        <button className={styles.placeProductBtn} onClick={open}>Разместить товар</button>
    )
}
>>>>>>> main

	return (
		<>
			<button onClick={openModal} className={styles.placeProductBtn}>
				Разместить товар
			</button>
			{isModalOpen && <AddProductModal onClose={closeModal} />}
		</>
	)
}
