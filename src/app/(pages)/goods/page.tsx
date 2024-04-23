import { GAS_Header } from '@/shared/ui/GoodsAndServices/Header'
import { OrderList } from '@/shared/ui/GoodsAndServices/OrderList'
import { PlaceProductBlock } from '@/widgets/PlaceProductBlock/PlaceBroductBlock'
import React from 'react'

const Goods = () => {
  return (
    <>
    <GAS_Header/>
    <PlaceProductBlock />
    <OrderList />
    
    </>
  )
}

export default Goods