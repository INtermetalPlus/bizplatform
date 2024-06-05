import { useSimilarStore } from "@/features/lib/storage/SimilarOrderStore/SimilarOrderStore";
import React from "react";
import styles from './SO_currentOrder.module.scss'



export const SimilarOrder_currentOrder: React.FC = () => {
    const {similarOrder} = useSimilarStore()

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'UTC'
        });
    };

    return (
        <>
            {similarOrder.map((similarItem) => (
                <div key={similarItem.id} className={styles.current_order_frame}>
                    <div className={styles.current_order_frame__data_block}>
                        <p>Заказ № {similarItem.order_number}</p>
                        <p>{formatDate(similarItem.created_at)}</p>
                    </div>
                    <h1 className={styles.current_order_frame__header}>{similarItem.order_title}</h1>
                    <span className={styles.current_order_frame__description}>{similarItem.order_text}</span>
                    {/* {similarItem.delivery_address.map((adress, id) => (
                        <span key={id}>{adress}</span>
                    ))} */}
                    <p className={styles.current_order_frame__category_title}>Категория</p>
                    <span className={styles.current_order_frame__category_info}>
                        {similarItem.category}
                    </span>
                    <p className={styles.current_order_frame__category_title}>Поставка из</p>
                    <span className={styles.current_order_frame__category_info}>
                        {similarItem.cities}
                    </span>
                    <p className={styles.current_order_frame__category_title}>Поставка в</p>
                    <span className={styles.current_order_frame__category_info}>
                        {similarItem.delivery_address}
                    </span>
                </div>
            ))}        
        </>
    )
}