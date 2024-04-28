
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
              
              defaultValue="Товары"
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
<div className={styles.orderList}>
          <div className={styles.orderList_imag}>
            <div className={styles.orderList_blog}>
              
            </div>
            <div className={styles.orderList_blog_title}>
              <div className={styles.orderList_blog_title_text}>
                <span>Ветровка/Флоранс </span>
              </div>
              <div className={styles.orderList_blog_title_text}>
                <span>от 1200с за 1шт. </span>
              </div>
            </div>
            <div className={styles.orderList_blog_bigText}>
                <span>Женская ветровка, на осень/весну. Материал: холодок,приятный к телу.Женская ветровка</span>
              </div>
              <div className={styles.orderList_blog_smallText}>
                <h3>Место отправки <span>Москва</span></h3>
                <h3>Контакты: <span>+773 090909</span></h3>
              </div>

              <BlueButton
              type="primaryButton"
              width="385px"
              text="Написать поставщику "
              onClick={handleOpenOrderModal}
              />

          </div>
        </div>
         
        </div>
       
      </div>
    </div>
  );
};
