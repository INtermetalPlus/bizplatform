import type { Meta, StoryObj } from '@storybook/react'
import { ProductList } from './ProductList'

  
const meta: Meta<typeof ProductList> = {
	title: 'Product list',
	component: ProductList
}
export default meta
type Story = StoryObj<typeof ProductList>

  
export const Primery: Story = {}