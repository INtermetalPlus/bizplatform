import React from "react";
import '../../../app/globalStyle.css'

import { Navigation } from "@/widgets/Header/navigation";
import { GAS_Header } from "@/shared/ui/GoodsAndServices/Header";
import { PlaceProductBlock } from "@/widgets/PlaceProductBlock/PlaceBroductBlock";





export const GoodsAndServices: React.FC = () => {
    return (
        <div className="container">
            <Navigation/>
            <GAS_Header/>
            <PlaceProductBlock/>
        </div>
    )
}