import type { Meta, StoryObj } from '@storybook/react'
import { GAS_list } from './GAS_list'

  
const meta: Meta<typeof GAS_list> = {
	title: 'GAS list',
	component: GAS_list
}
export default meta
type Story = StoryObj<typeof GAS_list>

  
export const Primery: Story = {}