import { create } from 'zustand'
import axios from 'axios'

const useModalStore = create(set => ({
	isModalOpen: false,
	openModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false }),
}))



export const useProductStore = create(set => ({
	product: null,
	addProduct: newProduct => set({ product: newProduct }),

	addProductAsync: async newProductData => {
		const response = await axios.post(
			'http://167.172.161.102:82/api/v1/orders/',
			newProductData
		)
			 set({ product: response.data })
		} 
	}))

export default useModalStore