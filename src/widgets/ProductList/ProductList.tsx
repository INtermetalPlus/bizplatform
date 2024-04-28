"use client";
import React, { useState } from "react";
import styles from './ProductList.module.scss'
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import { Order } from "@/entities/order";
import Image from "next/image";
import Plus from "../AllOrder/plus.svg";
import Strelka from "../AllOrder/arrow_forward_ios (1).svg";
import { CreateOrderModal } from "../CreateOrderModal";
import { Select } from "antd";
import SelectIcon from "../AllOrder/Frame 220.png";
import { IndicateRegion } from "../IndicateRegion";

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
  
    
    const orders = [
      {
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },
      {
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },
      {
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },
      {
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },{
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },{
        name: "Ветровка/Флоранс",
        price: "от 1200с за 1шт.",
        description:
          "Женская ветровка, на осень/весну. Материал: холодок, приятный к телу.",
        location: "Место отправки: Москва",
        contact: "Контакты: +773 090909",
      },
    ];
    
  
  return (
    <div className={styles.main}>
     
      <div className={styles.secondBlock}>
        <div className={styles.categories}>
          <div className={styles.selectDiv}>
            {/* <select className={styles.select} name="" id="">
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select> */}
            <Select
              suffixIcon={null}
              className={styles.select}
              
              defaultValue=""
              optionLabelProp="label"
              variant="borderless"
            >
               {options.map((option) => (
      <Option key={option.label} optionFontSize={22} value={option.value} label={option.label}>
        <div className={styles.divSelect}>
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

            <BlueButton
              type="primaryButton"
              width="385px"
              text="Создать заказ"
              onClick={handleOpenOrderModal}
              />
{isOrderModalOpen && <CreateOrderModal onClose={handleCloseOrderModal} />}

</div>
{orders.reduce((rows, order, index) => {
  if (index % 2 === 0) rows.push([]);
  rows[rows.length - 1].push(
    <div key={index} className={styles.blog_card}>
      <div className={styles.orderList_imag}>
        <div className={styles.orderList_blog}></div>
        <div className={styles.orderList_blog_title}>
          <div className={styles.orderList_blog_title_text}>
            <span>{order.name}</span>
          </div>
          <div className={styles.orderList_blog_title_text}>
            <span>{order.price}</span>
          </div>
        </div>
        <div className={styles.orderList_blog_bigText}>
          <span>{order.description}</span>
        </div>
        <div className={styles.orderList_blog_smallText}>
          <h3>{order.location}</h3>
          <h3>{order.contact}</h3>
        </div>
        <BlueButton
          type="primaryButton"
          width="385px"
          text="Написать поставщику"
          onClick={handleOpenOrderModal}
        />
      </div>
    </div>
  );
  return rows;
}, []).map((row, index) => (
  <div key={index} className={styles.orderRow}>
    {row}
  </div>
))}

        </div>
        </div>
      </div>
    
    

    
  );
};

