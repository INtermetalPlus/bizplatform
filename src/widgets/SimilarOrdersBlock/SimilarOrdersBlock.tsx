import React, { useEffect } from "react";
import styles from './SOB_UI.module.scss'
import { useOrders } from "@/features/lib/storage/OrderStore";
import { useSimilarStore } from "@/features/lib/storage/SimilarOrderStore/SimilarOrderStore";


export default function SimilarOrdersBlock() {
    const {orders, fetchOrders} = useOrders()

    useEffect(() => {
        fetchOrders()
    }, [fetchOrders])

    
    const truncateWords = (text: string, wordLimit: number): string => {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
          return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    }


    const {addOrder, removeOrderElement, similarOrder} = useSimilarStore()
    const moreOrderInfo = (elem: any) => {
      const removeActivate = similarOrder.find(removeElem => removeElem !== elem)
      if(removeActivate){
        removeOrderElement(removeActivate)
      }

      addOrder(elem)
      
      window.scrollTo(0, 0)
    }

    return (
        <>
            {orders.map((item) => (
                <div 
                key={item.id}
                className={styles.orders_frame} 
                onClick={() => moreOrderInfo(item)}
                >
                  <div className={styles.orders_frame__order_number}>
                    <span>Заказ № {item.order_number}</span>
                    <span>2 апреля 2024, 13:09</span>
                  </div>
                  <h1 className={styles.orders_frame__order_title}>
                    {item.order_title}
                  </h1>
                  <span className={styles.orders_frame__order_description}>
                    {truncateWords(item.order_text, 14)}
                  </span>
                  <div className={styles.orders_frame__order_place}>
                    <p className={styles.orders_frame__order_city }>
                      Поставка в Бишкек
                    </p>
                    <button className={styles.orders_frame__eye}/>
                  </div>
                </div>
            ))}
        </>
    )
}