import React, { useEffect } from "react";
import GAS_orderStore from "@/entities/GAS_orderStore/GAS_orderStore";
import { StatickData } from "./GAS_statickData";


export const OrderList: React.FC = () => {
    const {order, fetchOrder} = GAS_orderStore(state => ({
        order: state.orders,
        fetchOrder: state.fetchOrder
    }))

    useEffect(() => {
        fetchOrder()
    },[fetchOrder])

    return (
        <>
            {/* <div>
                {order.map((item) => (
                    <div key={item.id} >
                        <h4>{item.order_title}</h4>
                        <h5>Подкатегория</h5>
                        <span>{item.order_text}</span>
                    </div>
                ))} 
            </div> */}
            <StatickData/>
        </>
    )
}