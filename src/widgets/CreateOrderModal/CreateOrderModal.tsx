'use client'
import React from "react";
import styles from "./CreateOrderModal.module.scss";
import Okey from "../../shared/assets/icons/Group.png";
import cross from "../../shared/assets/icons/x-close.png";
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
        src={cross}
        width={24}
        height={24}
        alt="krestik"
        className={styles.krestik}
        onClick={handleOutsideClick}
      />
      <div className={styles.main}>
        <h1 className={styles.main__header}>Заявка принята</h1>
        <span className={styles.main__description}>Ваш запрос будет обработан нашим менеджером,<br/>который свяжется с вами вближайшее время.</span>
        <Image src={Okey} width={120} height={120} alt="access" />
      </div>
    </div>
  );
};
