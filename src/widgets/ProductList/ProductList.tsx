"use client";
import React, { useEffect, useState } from "react";
import styles from './ProductList.module.scss'
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import { Order } from "@/entities/order";
import Image from "next/image";
import Plus from "../AllOrder/plus.svg";
import Strelka from "../../shared/assets/icons/arrow_forward_ios (1).svg";
import { CreateOrderModal } from "../CreateOrderModal";
import { Select } from "antd";
import SelectIcon from "../../shared/assets/icons/Frame 220.png";
import { IndicateRegion } from "../IndicateRegion";
import { orderListDataHook } from "@/features/storage/GAS_listOrders/GAS_orders";

const { Option } = Select;

export const ProductList = () => {
  
  const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const handleOpenRegionModal = () => {
    setIsRegionModalOpen(true);
  };
  
  const handleCloseRegionModal = () => {
    setIsRegionModalOpen(false);
  };
  
  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };
  
  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };
  

 
// в value указывается число! Чтобы потом можно было передать список (options) на сервер
  const options = [
    { value: 1, label: 'Электроника' },
    { value: 2, label: 'Строительство и Ремонт' },
    { value: 3, label: 'Недвижимость' },
    { value: 4, label: 'Строительство' },
    { value: 5, label: 'Ремонт' },
    { value: 6, label: 'Строительные Материалы' },
    { value: 7, label: 'Дизайн и Декор' },
    { value: 8, label: 'Инженерные Системы' },
  ];
  
    
const {orders, fetchOrder} = orderListDataHook()

  useEffect(() => {
    fetchOrder()
  }, [fetchOrder])
  
  return (
    <>
      <div className={styles.main}>
        <div className={styles.secondBlock}>
          <div className={styles.categories}>
            <div className={styles.selectDiv}>
              <Select
                suffixIcon={null}
                className={styles.select}
                defaultValue={1}
                optionLabelProp="label"
                variant="borderless"
              >
              {options.map((option) => (
                <Option key={option.value} optionFontSize={22} value={option.value} label={option.value}>
                  <div className={styles.divSelect}>
                    <Image src={SelectIcon} alt="eye" width={48} height={48} />
                    {option.label.split(' ').map((word, index, array) => (
                          <div key={index}>
                            {word}
                            {index < array.length - 1 && <br />}
                          </div>
                    ))}
                  </div>
                </Option>
              ))}
              </Select>
              <div className={styles.icon}>
                {" "}
                <Image src={Strelka} alt="strelka" width={20} height={20} />
              </div>
              <div className={styles.BlogCheck}>
              <div className={styles.title}>Наличие</div>
              <div className={styles.viewedCheck}>
                В наличии{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              <div className={styles.completedCheck}>
                Под заказ{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              </div>
              <div className={styles.BlogCheck}>
              <div className={styles.title}>Оплата</div>
              <div className={styles.viewedCheck}>
                Наличными{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              </div>
              <div className={styles.completedCheck}>
                  Безналичный расчет{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              <div className={styles.BlogCheck}>
              <div className={styles.title}>Доставка</div>
              <div className={styles.viewedCheck}>
                  Самовывоз{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              <div className={styles.completedCheck}>
                  Почта/Курьер{" "}
                <input type="checkbox" className={styles.check} />
              </div>
              <div className={styles.price}>
              <span>Цена</span>
              <div className={styles.inputPrice}>
                <input type="text" placeholder="0 сом" />
                <div>
                  <svg
                    width="8"
                    height="2"
                    viewBox="0 0 8 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="8" height="2" fill="#D9D9D9" />
                  </svg>
                </div>
                <input type="text" placeholder="0 сом" />
              </div>
            </div>
            <div className={styles.see_also}>
              Смотреть также
            </div>
            <div className={styles.see_also_icon}>
            </div>
              <div className={styles.see_also_link}>
              </div>
            </div>
            </div>
          </div>
          <div className={styles.orders}>
            <div className={styles.searchField}>
              <SearchField />
              <button
              type="submit"
              className={styles.searchField__btn}
              onClick={handleOpenOrderModal}
              >
                Разместить товар
              </button>
              {isOrderModalOpen && <CreateOrderModal onClose={handleCloseOrderModal} />}
            </div>
            {orders.map((item) => (
              <div key={item.id} className={styles.order_frame}>
                <h1>{item.order_title}</h1>
                <h2>{item.price}</h2>
                <span>{item.order_text}</span>
                <span>
                  Место отправки{item.regions}
                </span>
                <span>
                  Контакты: {item.phone_number}
                </span>
                <button type="submit"  className={styles.order_frame__btn}>Написать поставщику</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

