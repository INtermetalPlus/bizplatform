'use client'
import React, { useState } from "react";
import styles from "./AddProductModal.module.scss";
import { Select } from "@/shared/ui/select";
import { BlueButton } from "@/shared/ui/blueButton";
import axios from "axios";


interface AddProductModalProps {
  onClose: () => void;
}

// Создайте экземпляр axios с предварительно настроенными параметрами
const api = axios.create({
  baseURL: "http://167.172.161.102:82/api/v1/",
});

// Используйте промежуточное ПО axios для добавления токена в заголовки запроса
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access'); // Получите токен из локального хранилища
  if (token) {
    config.headers.Authorization = `JWT ${token}`; // Добавьте токен в заголовок запроса
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
  // Define state variables for each form field
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState(0);
  const [existance, setExistance] = useState(true);
  const [categories, setCategories] = useState([0]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Create product object
    const product = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      company: 0,
      product_name: productName,
      product_description: productDescription,
      characteristics: characteristics,
      price: price,
      currency: currency,
      existance: existance,
      categories: categories,
    };

    // Send POST request
    try {
      const response = await api.post('products/', product);
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className={styles.modal} onClick={handleOutsideClick} onSubmit={handleSubmit}>
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
            Категория вашего товара/услуги
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
