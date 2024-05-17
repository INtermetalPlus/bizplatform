import { AO_footerGreyBlock } from '@/shared/ui/AllOrder/AO_footerGreyBlock'
import { AllOrder } from '@/widgets/AllOrder'
import { Footer } from '@/widgets/Footer'
import { Navigation } from '@/widgets/Header/navigation'
import React from 'react'

const Orders = () => {
  return (
    <>
      <Navigation/>
      <AllOrder />
      <Footer/>
      <AO_footerGreyBlock/>
    </>
  )
}

export default Orders