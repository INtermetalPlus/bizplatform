import React from 'react'
import { AboutCompany } from '../../widgets/aboutCompany/AboutCompany'
import { Comments } from '../../widgets/Comments/Comments'
import { Navigation } from '../../widgets/Header/navigation'
import { Footer } from '../../widgets/Footer'
import { Menu } from '../../widgets/Menu/Menu'
import  {CompanyPageNav}  from '../../widgets/CompanyPageNav/CompanyPageNav'
import { CommentsNew } from '../../widgets/CommentsNew/CommentsNew'
import { GoodsAndServicesBlock } from '../../widgets/GoodsAndServicesBlock/GoodsAndServicesBlock'
import { MyOrders } from '../../widgets/MyOrders/MyOrders'
import { MyTariff } from '../../widgets/myTariff/MyTariff'
 
const CompanyPage = () => {
  return (
		<html lang='en'>
			<body>
        <Navigation />

        <Menu />

        <CompanyPageNav />

        <GoodsAndServicesBlock />

        <AboutCompany />

        <MyOrders />

        <MyTariff />

        <CommentsNew />

        {/* <Footer /> */}
			</body>
		</html>
	)
}

export default CompanyPage