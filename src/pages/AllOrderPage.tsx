import { AllOrder } from "@/widgets/AllOrder";
import { Footer } from "@/widgets/Footer";
import { Navigation } from "@/widgets/Header/navigation";
import React from "react";


export const AllOrderPage: React.FC = () => {
    return (
        <>
            <Navigation/>
            <AllOrder/>
            <Footer/>
        </>
    )
}