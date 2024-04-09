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
  type: "viewed" | "completed" | string; // указал string из-за того, что ts ругался, принимает только два значения 
}

export const Order: React.FC<OrderProps> = ({
  orderNumber,
  name,
  commentText,
  date,
  supply,
  type,
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
          {commentText.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      </div>
      <div className={styles.supplyEye}>
        <span className={styles.supply}>{supply}</span>
        {type === "viewed" && (
          <div className={styles.eye}>
            <Image src={Eye} alt="eye" width={30} height={30} />
          </div>
        )}
      </div>
    </div>
  );
};
