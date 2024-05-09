import React from "react";
import styles from "./Order.module.scss";
import Image from "next/image";
import Eye from "./eye.svg";

interface OrderProps {
  orderNumber: number;
  name: string;
  commentText: string;
  date: string;
  supply: string;
  type: "viewed" | "completed" | string;
  category?: string;
  deliveryFrom?: string; 
  showImage?: boolean;
}

export const Order: React.FC<OrderProps> = ({
  orderNumber,
  name,
  commentText,
  date,
  supply,
  type,
  category,
  deliveryFrom,
  showImage = true,
}) => {
  
  return (
    <div className={type === "completed" ? styles.completed : styles.main}>
      <div className={styles.orderAndDate}>
        <div className={styles.order}>Заказ № {orderNumber}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.nameComment}>
        <p className={styles.name}> {name}</p>
        <span className={styles.comment}>
          {" "}
          {typeof commentText === 'string' ? commentText.split("\n").map((line, i) => (
            <React.Fragment key={i}>
                {line}
                <br />
            </React.Fragment>
          )) : null}
        </span>
        {category && ( // добавлено
        <div className={styles.category}>
          <p>Категория</p>
          <span className={styles.blue}>{category}</span>
        </div>
      )}
      {deliveryFrom && ( // добавлено
        <div className={styles.deliveryFrom}>
          <p>Поставка из</p>
          <span className={styles.blue}>{deliveryFrom}</span>
        </div>
      )}
      </div>
      <div className={styles.supplyEye}>
        <span className={styles.supply}>{supply}</span>
        {showImage && type === "viewed" && (
          <div className={styles.eye}>
            <Image src={Eye} alt="eye" width={30} height={30} />
          </div>
        )}
      </div>
     
    </div>
  );
};
