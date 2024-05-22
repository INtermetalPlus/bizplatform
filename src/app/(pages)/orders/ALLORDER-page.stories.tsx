import type { Meta, StoryObj } from '@storybook/react'
import Orders from './Orders'

  
const meta: Meta<typeof Orders> = {
    title: 'Orders page', //заголовок не должен повторяться где-то ещё
    component: Orders
}
export default meta
type Story = StoryObj<typeof Orders>

  
export const Primery: Story = {}