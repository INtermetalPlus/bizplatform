'use client'
import React from "react";
import styles from './SOP_UI.module.scss'
import { SimilarOrderForm } from "@/widgets/SimilarOrderForm/SimilarOrderForm";
import { SimilarOrder_currentOrder } from "@/widgets/SimilarOrder_currentOrder/SimilarOrder_currentOrder";
import Link from "next/link";
import SimilarOrdersBlock from "@/widgets/SimilarOrdersBlock/SimilarOrdersBlock";
import { useSimilarStore } from "@/features/lib/storage/SimilarOrderStore/SimilarOrderStore";


export const SimilarOrderPage: React.FC = () => {
    const {removeOrder, similarOrder} = useSimilarStore()

    const removeSimilarOrder= (event: any) => {
        const orderId = event.target.value;
        removeOrder(orderId);
    }

    return (
        <>
            <div className={styles.container}>
                <Link href='/orders' onClick={removeSimilarOrder} className={styles.link}>
                    <p className={styles.link__title}>Все заказы</p>
                </Link>
                <div className={styles.similar_order__block}>
                    <SimilarOrder_currentOrder/>
                    <SimilarOrderForm/>
                </div>
                <SimilarOrdersBlock/>
            </div>
        </>    
    )
}