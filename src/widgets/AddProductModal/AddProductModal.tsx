"use client";
import React, { useState } from "react";
import styles from "./AddProductModal.module.scss";
import { Select } from "@/shared/ui/select";
import { BlueButton } from "@/shared/ui/blueButton";
import useStore from "@/pages/api/addProduct/store";

interface AddProductModalProps {
  onClose: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  onClose,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState(1);
  const [existance, setExistance] = useState(true);
  const [categories, setCategories] = useState([1]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const addProduct = useStore((state) => state.addProduct);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const product = {
      company: 10,
      product_name: productName,
      product_description: productDescription,
      characteristics: characteristics,
      price: price,
      currency: currency,
      existance: existance,
      categories: categories,
    };

    addProduct(product);
  };

  return (
    <form
      className={styles.modal}
      onClick={handleOutsideClick}
      onSubmit={handleSubmit}
    >
      <div className={styles.main}>
        <div className={styles.header}>
          <h3>Добавление товара и услуги</h3>
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
            <label>
              Описание вашего товара/услуги
              <textarea
                name="description"
                style={{ width: "", height: "100px" }}
                placeholder="Не больше 60 символов"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </label>
            <label>
              Характеристика вашего товара/услуги
              <textarea
                name="characteristics"
                style={{ width: "", height: "100px" }}
                placeholder="Не больше 60 символов"
                value={characteristics}
                onChange={(e) => setCharacteristics(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </label>
              <label>
                Валюта
                <Select
                  type="secondarySelect"
                  width="280px"
                  options={[
                    { value: 1, label: "Кыргызский сом" },
                    { value: 2, label: "Американский доллар" },
                    { value: 3, label: "Российский рубль" },
                  ]}
                  value={currency}
                  onChange={(value) => setCurrency(Number(value))}
                />
              </label>
            </div>
            <label style={{ marginBottom: "0", marginTop: "0" }}>
              Категория вашего товара/услуги
              <Select
                type="secondarySelect"
                width="364px"
                options={[
                  { value: 1, label: "Для дома" },
                  { value: 2, label: "Автотовары" },
                ]}
                value={categories}
                onChange={(value) => setCategories([Number(value)])}
              />
            </label>
            <label>
              Выбор наличия вашего товара/услуги
              <div className={styles.checkbox}>
                <input
                  type="radio"
                  name="availability"
                  className={styles.checkbox_round}
                  checked={existance}
                  onChange={() => setExistance(true)}
                />
                В наличии
              </div>
              <div className={styles.checkbox}>
                <input
                  type="radio"
                  name="order"
                  className={styles.checkbox_round}
                  checked={!existance}
                  onChange={() => setExistance(false)}
                />
                Под заказ
              </div>
            </label>

            <div style={{ marginTop: "20px" }}>
              <BlueButton
                type="primaryButton"
                width="385px"
                text="Добавить товар"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
