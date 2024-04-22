import React, { useState } from "react";
import styles from "./AddProductModal.module.scss";
import { Select } from "@/shared/ui/select";
import { BlueButton } from "@/shared/ui/blueButton";
import axios from "axios"; // Импортируем axios для отправки запросов

interface AddProductModalProps {
  onClose: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    characteristics: "",
    price: "",
    currency: "",
    category: "",
    availability: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://167.172.161.102:82/api/v1/orders/", formData);
      console.log(response.data); // Обработка успешного ответа сервера
      onClose(); // Закрыть модальное окно после успешной отправки данных
    } catch (error) {
      console.error("Error:", error); // Обработка ошибок при отправке запроса
    }
  };

  return (
    <div className={styles.modal}>
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
                value={formData.name}
                onChange={handleChange}
                style={{ width: "", height: "69px" }}
                placeholder="Название товара или услуги"
              />
            </label>
            <label>
              Описание вашего товара/услуги
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                style={{ width: "", height: "100px" }}
                placeholder="Не больше 60 символов"
              />
            </label>
            <label>
              Характеристика вашего товара/услуги
              <textarea
                name="characteristics"
                value={formData.characteristics}
                onChange={handleChange}
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
                  value={formData.price}
                  onChange={handleChange}
                  style={{ width: "349px", height: "64px" }}
                  placeholder="000"
                />
              </label>
              <label>
                Валюта
                <Select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  type="secondarySelect"
                  width="280px"
                  options={["Кыргызский сом", "Американский доллар", "Российский рубль"]}
                />
              </label>
            </div>
            <label style={{ marginBottom: "0", marginTop: "0" }}>
              Категория вашего товара/услуги
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
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
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="availability"
                  className={styles.checkbox_round}
                  value="В наличии"
                  onChange={handleChange}
                />
                В наличии
              </div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="availability"
                  className={styles.checkbox_round}
                  value="Под заказ"
                  onChange={handleChange}
                />
                Под заказ
              </div>
            </label>
            <div style={{ marginTop: "20px" }}>
              <BlueButton type="primaryButton" width="385px" text="Добавить товар" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
