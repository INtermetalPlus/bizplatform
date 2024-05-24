import { Footer } from "@/widgets/Footer";
import { Navigation } from "@/widgets/Header/navigation";
import { ProductList } from "@/widgets/ProductList/ProductList";
import React from "react";


export const GAS_list: React.FC = () => {
    return (
        <>
            <Navigation/>
            <ProductList/>
            <Footer/>
        </>
    )
}