import React from "react";
import styles from './PlaceProductBlock.module.scss'

import { GAS_PlaceProduct } from "@/shared/ui/GoodsAndServices/PlaceProduct";
import { GAS_FindOrder } from "@/shared/ui/GoodsAndServices/FindOrder";
import { GAS_SetCountry } from "@/shared/ui/GoodsAndServices/SetCountry";


export const PlaceProductBlock: React.FC = () => {
    return (
        <div className={styles.PlaceProduct__block}>
            <GAS_SetCountry/>
            <GAS_FindOrder/>
            <GAS_PlaceProduct/>
        </div>
    )
}