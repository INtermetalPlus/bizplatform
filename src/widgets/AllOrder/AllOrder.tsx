"use client";
import React, { useState } from "react";
import styles from "./AllOrder.module.scss";
// another styles
import '../../app/globalStyle.css'
import './ui.css'
// other
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import { Order } from "@/entities/order";
import Image from "next/image";
import Plus from "../../shared/assets/icons/plus.svg";
import arrowDown from "../../shared/assets/icons/arrow_forward_ios (1).svg";
import { CreateOrderModal } from "../CreateOrderModal";
import { Select } from "antd";
import SelectIcon from "../../shared/assets/icons/arrow_forward_ios (1).svg";
import { IndicateRegion } from "../IndicateRegion";
import { AO_header } from "@/shared/ui/AllOrder/AO_header";
import { AO_headerInfo } from "@/shared/ui/AllOrder/AO_headerInfo";
import { closeApplicationModal, closeModal } from "@/features/lib/helpers/CloseHook";
import { AddProductModal } from "../AddProductModal";


const { Option } = Select;


export const AllOrder: React.FC = () => {
  const {isOpen, open} = closeModal()
  const {isOpenApplication, openApplication, closeApplication} = closeApplicationModal(state => ({
    isOpenApplication: state.isOpen,
    openApplication: state.open,
    closeApplication: state.close
  }))


  const orders = [
    {
      id: 0,
      type: "completed",
      orderNumber: 323423,
      name: "Автотовары",
      commentText:
        "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
    },
    {
      id: 2,
      type: "viewed",
      orderNumber: 323423,
      name: "Автотовары",
      commentText:
        "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
    },
    {
      id: 3,
      type: "viewed",
      orderNumber: 323423,
      name: "Автотовары",
      commentText:
        "Вне зависимости от того, вам нужны строительные материалы, электроинструменты, краски и лаки, или же материалы для отделочных работ, мы можем удовлетворить ваши потребности и оказать полную поддержку  вашему бизнесу. \n \n Благодаря нашей оперативной доставке и высокому уровню обслуживания, вы можете быть уверены, что ваш заказ будет выполнен вовремя и с максимальным удобством для вас. Сделайте следующий шаг к успеху вашего бизнеса в области ремонта, сделайте оптовую закупку у нас сегодня и дайте вашему бизнесу рост и процветание!",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
    },
  ];

  const options = [
    { id: 0, value: 0, label: 'Электроника' },
    {  id: 1, value: 1, label: 'Строительство и Ремонт' },
    {  id: 2, value: 2, label: 'Недвижимость' },
    {  id: 3, value: 3, label: 'Строительство' },
    {  id: 4, value: 4, label: 'Ремонт' },
    {  id: 5, value: 5, label: 'Строительные Материалы' },
    {  id: 6, value: 6, label: 'Дизайн и Декор' },
    {  id: 7, value: 7, label: 'Инженерные Системы' },
  ];
  
  return (
    <div className={styles.main}>
      <AO_header/>
      <AO_headerInfo/>
      <div className={styles.secondBlock}>
        <div className={styles.categories}>
          <div className={styles.selectDiv}>
            <Select
            suffixIcon={null}
            className={styles.select}
            defaultValue="Категории"
            variant="borderless"
            >
            {options.map((options) => (
              <Option key={options.value} optionFontSize={22} value={options.value} label={options.label}>
                <div className={styles.divSelect}>
                  <Image src={SelectIcon} alt="eye" width={48} height={48} />
                  {options.label.split(' ').map((word, index, array) => (
                    <div key={index}>
                      {word}
                      {index < array.length - 1 && ' '}
                    </div>
                  ))}
                </div>
              </Option>
            ))}
            </Select>
            <div className={styles.icon}>
              {" "}
              <Image src={arrowDown} alt="strelka" width={20} height={20} className={styles.select__arrow}/>
            </div>
          </div>
          <button className={styles.regions} onClick={open}>
            <span>Регионы</span>{" "}
            <Image src={Plus} alt="plus" width={30} height={30} />
          </button>
          {isOpen && (
            <IndicateRegion onClose={close}/>
          )}
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
          <div>
            <div className={styles.viewedCheck}>
              Скрыть просмотренные{" "}
              <input type="checkbox" className={styles.check} />
            </div>
            <div className={styles.completedCheck}>
              Скрыть завершенные{" "}
              <input type="checkbox" className={styles.check} />
            </div>
          </div>
        </div>
        <div className={styles.orders}>
          <div className={styles.searchField}>
            <SearchField />
            <BlueButton
            type="primaryButton"
            width="385px"
            text="Создать заказ"
            onClick={openApplication}
            />
            {isOpenApplication && <AddProductModal onClose={closeApplication} />}
          </div>
          {orders.map((order, index) => (
            <Order
            key={index}
            type={order.type}
            orderNumber={323423}
            name={order.name}
            commentText={order.commentText}
            date={order.date}
            supply={order.supply}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
