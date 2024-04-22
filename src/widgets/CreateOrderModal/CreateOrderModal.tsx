'use client'
import React from "react";
import styles from "./CreateOrderModal.module.scss";
import Okey from "./Group.png";
import Krestik from "./x-close.png";
import Image from "next/image";

interface CreateOrderModalProps {
  onClose: () => void;
}

export const CreateOrderModal: React.FC<CreateOrderModalProps> = ({
  onClose,
}) => {
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Image
        src={Krestik}
        width={24}
        height={24}
        alt="krestik"
        className={styles.krestik}
        onClick={handleOutsideClick}
      />
      <div className={styles.main}>
        <h2>Заявка принята</h2>
        <span>
          Ваш запрос будет обработан нашим менеджером, <br />     который свяжется с вами в
          ближайшее время.
        </span>
        <Image src={Okey} width={120} height={120} alt="okey" />
      </div>
    </div>
  );
};
