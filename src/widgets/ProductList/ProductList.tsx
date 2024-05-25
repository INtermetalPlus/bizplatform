"use client";
import React, { useEffect, useState } from "react";
import '../../app/globalStyle.css'
import './antdSelector_ui.scss'
import styles from './ProductList.module.scss'
import { SearchField } from "@/features/searchField";
import Image from "next/image";
import cross from "../../shared/assets/icons/x-close.png";
import { CreateOrderModal } from "../CreateOrderModal";
import { Select } from "antd";
import SelectIcon from "../../shared/assets/icons/Frame 220.png";
import { orderListDataHook } from "@/features/storage/GAS_listOrders/GAS_orders";
import { useOrderFrames } from "@/features/lib/helpers/ProductList_orderHook";

const { Option } = Select;

export const ProductList: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  const handleOpenOrderModal = () => {
    setIsOrderModalOpen(true);
  };
  
  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };
  

// в value указывается число! Чтобы потом можно было передать список (options) на сервер
  const optionsPlacegolder = {value: 0, label: "Товары"}
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
  

const {isFrame, closeFrame} = useOrderFrames()
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
              className={styles.select}
              defaultValue={optionsPlacegolder}
              optionLabelProp="label"
              >
              {options.map((option) => (
                <Option key={option.label} optionFontSize={22}>
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
                  Безналичный расчет
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
            <div className={styles.orders}>
              <div className={styles.orders__frame_block}>
              {orders.map((item) => (
                isFrame[item.id] !== false && (
                  <div key={item.id} className={styles.order_frame}>
                    <div className={styles.order_frame__order_img}>
                      <Image
                      src={cross}
                      width={24}
                      height={24}
                      alt="closing order frame"
                      className={styles.order_frame__cross}
                      onClick={() => closeFrame(item.id)}
                      />
                    </div>
                    <h1 className={styles.order_frame__title}>{item.order_title}</h1>
                    <p className={styles.order_frame__price}>От {item.price}c за 1шт.</p>
                    <span className={styles.order_frame__description}>{item.order_text}</span>
                    <span className={styles.order_frame__regions}>
                      Место отправки: <b>{item.regions}</b>
                    </span>
                    <span className={styles.order_frame__contact}>
                      Контакты: <b>{item.phone_number}</b>
                    </span>
                    <button type="submit" className={styles.order_frame__frame_btn}>Написать поставщику</button>
                  </div>
                )
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}