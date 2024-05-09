"use client";
import React, { useState } from "react";
import styles from "./AllOrder.module.scss";
// another styles
import '../../app/globalStyle.css'
// other
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import { Order } from "@/entities/order";
import Image from "next/image";
import Plus from "./plus.svg";
import Strelka from "./arrow_forward_ios (1).svg";
import { CreateOrderModal } from "../CreateOrderModal";
import { Select } from "antd";
import SelectIcon from "./Frame 220.png";
import { IndicateRegion } from "../IndicateRegion";
import { AO_header } from "@/shared/ui/AllOrder/AO_header";
import { AO_headerInfo } from "@/shared/ui/AllOrder/AO_headerInfo";

const { Option } = Select;

export const AllOrder = () => {
  
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
  

  const orders = [
    {
      type: "completed",
      orderNumber: 323423,
      name: "Автотовары",
      commentText:
        "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
    },

    {
      type: "viewed",
      orderNumber: 323423,
      name: "Автотовары",
      commentText:
        "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
    },

    {
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
    { value: 'Электроника', label: 'Электроника' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Строительство и Ремонт' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Недвижимость' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Строительство' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Ремонт' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Строительные Материалы' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Дизайн и Декор' },
    { value: 'Строительство Недвижимость Ремонт', label: 'Инженерные Системы' },
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
              optionLabelProp="label"
              variant="borderless"
            >
            {options.map((option) => (
              <Option key={option.label} optionFontSize={22} value={option.value} label={option.label}>
                <div className={styles.divSelect} key={1}>
                  <Image src={SelectIcon} alt="eye" width={48} height={48} />
                  {option.label.split(' ').map((word, index, array) => (
                    <>
                      {word}
                      {index < array.length - 1 && <br />}
                    </>
                  ))}
                </div>
              </Option>
            ))}
            </Select>
            <div className={styles.icon}>
              {" "}
              <Image src={Strelka} alt="strelka" width={20} height={20} className={styles.select__arrow}/>
            </div>
          </div>
          <button className={styles.regions} onClick={handleOpenRegionModal}>
            <span>Регионы</span>{" "}
            <Image src={Plus} alt="plus" width={30} height={30} />
          </button>
          {isRegionModalOpen && <IndicateRegion onClose={handleCloseRegionModal} />}
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
            onClick={handleOpenOrderModal}
            />
            {isOrderModalOpen && <CreateOrderModal onClose={handleCloseOrderModal} />}
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
