'use client'
import React from "react";
import styles from "./AddProductModal.module.scss";
import { Select } from "@/shared/ui/select";
import { BlueButton } from "@/shared/ui/blueButton";
import useProductStore from "@/shared/ui/GoodsAndServices/store";

interface AddProductModalProps {
  onClose: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addProductAsync = useProductStore(state => state.addProductAsync)

  const handleClick = async () => {
    const newProduct = {
			id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
			company: 1,
			order_number: 2147483647,
			phone_number: '123456789',
			email: 'user@example.com',
			order_title: 'Iphone 13',
			order_text: 'Iphone 13 128gb',
			price: 1000,
			category: 0,
			countries: [0],
			regions: [0],
			cities: [0],
			delivery_address: [0],
		}
    await addProductAsync(newProduct);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Добавление товара или услуги</h3>
      </div>
      <div className={styles.block}>
        <div className={styles.photo}></div>
        <div className={styles.addForm}>
          <label>
            Что хотите продать?
            <input
              type="text"
              name="name"
              style={{ width: "", height: "69px" }}
              placeholder="Название товара или услуги"
            />
          </label>
          <label>
            Описание вашего товара/услуги
            <textarea
              name="description"
              style={{ width: "", height: "100px" }}
              placeholder="Не больше 60 символов"
            />
          </label>
          <label>
            Характеристика вашего товара/услуги
            <textarea
              name="characteristics"
              style={{ width: "", height: "100px" }}
              placeholder="Не больше 60 символов"
            />
          </label>
          <div style={{ display: "flex", gap: "12px" }}>
            <label>
              Цена вашего товара и услуги
              <input
                type="text"
                name="price"
                style={{ width: "349px", height: "64px" }}
                placeholder="000"
            
              />
            </label>
            <label >
              Валюта
              <Select
                type="secondarySelect"
                width="280px"
                options={["Кыргызский сом", "Американский доллар", "Российский рубль"]}
              />
            </label>
          </div>
          <label style={{ marginBottom: "0", marginTop: "0" }}>
            Категория 
            <Select
              type="secondarySelect"
              width="364px"
              options={[
                "Авто товары и сервисы",
                "Авто товары и сервисы",
                "Авто товары и сервисы",
              ]}
            />
          </label>
          <label>
            Выбор наличия вашего товара/услуги
            <div className={styles.checkbox} ><input type="checkbox" name="В наличии" className={styles.checkbox_round} /> В наличии</div>
            <div className={styles.checkbox}><input type="checkbox" name="Под заказ" className={styles.checkbox_round}/>Под заказ</div>
          </label>
          <div style={{marginTop: '20px'}}>

          <BlueButton
            onClick={handleClick}
            type="primaryButton"
            width="385px"
            text="Добавить товар"
          />

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
