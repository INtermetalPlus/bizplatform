"use client";
import React, { useState, useEffect } from "react";
import styles from "./AllOrder.module.scss";
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import { Order } from "@/entities/order";
import Image from "next/image";
import Plus from "./plus.svg";
import Strelka from "./arrow_forward_ios (1).svg"
import { CreateOrderModal } from "../CreateOrderModal";
import useOrderStore from '../../features/GetOrder/useOrderStor'

export const AllOrder = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  

  const {fetchOrders, orders} = useOrderStore()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
   useEffect(() => {
    fetchOrders()
});
   

  // const orders = [
  //   {
  //     type: "completed",
  //     orderNumber: 323423,
  //     name: "Автотовары",
  //     commentText:
  //       "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
  //     date: "2 апреля 2024, 13:09",
  //     supply: "Поставка в Бишкек",
  //   },

  //   {
  //     type: "viewed",
  //     orderNumber: 323423,
  //     name: "Автотовары",
  //     commentText:
  //       "Увеличьте свой автомобильный бизнес с нашими оптовыми заказами автотоваров! Мы предлагаем широкий ассортимент качественных автозапчастей, аксессуаров и инструментов по оптовым ценам.",
  //     date: "2 апреля 2024, 13:09",
  //     supply: "Поставка в Бишкек",
  //   },

  //   {
  //     type: "viewed",
  //     orderNumber: 323423,
  //     name: "Автотовары",
  //     commentText:
  //       "Вне зависимости от того, вам нужны строительные материалы, электроинструменты, краски и лаки, или же материалы для отделочных работ, мы можем удовлетворить ваши потребности и оказать полную поддержку  вашему бизнесу. \n \n Благодаря нашей оперативной доставке и высокому уровню обслуживания, вы можете быть уверены, что ваш заказ будет выполнен вовремя и с максимальным удобством для вас. Сделайте следующий шаг к успеху вашего бизнеса в области ремонта, сделайте оптовую закупку у нас сегодня и дайте вашему бизнесу рост и процветание!",
  //     date: "2 апреля 2024, 13:09",
  //     supply: "Поставка в Бишкек",
  //   },
  // ];
  return (
    <div className={styles.main}>
      <h2>Все заказы</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Pellentesque rhoncus mi
        venenatis sem.
      </p>
      <div className={styles.secondBlock}>
        <div className={styles.categories}>
            <div className={styles.selectDiv}>
          <select className={styles.select} name="" id="">
            <option value="Категории">Категории</option>
            <option value="Категории">Категории</option>
            <option value="Категории">Категории</option>
          </select>
          <div className={styles.icon}> <Image src={Strelka} alt="eye" width={20} height={20} /></div>
          </div>
          <button className={styles.regions}>
            <span>Регионы</span>{" "}
            <Image src={Plus} alt="eye" width={30} height={30} />
          </button>
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
              onClick={handleOpenModal}
            />
            {isModalOpen && <CreateOrderModal onClose={handleCloseModal} />}
          </div>

          {orders.map((order, index) => (
           <Order
           key={index}
           type={order.category.toString()} // Приводим к строке, если category - это число
           orderNumber={order.order_number}
           name={order.order_title}
           commentText={order.order_text}
           date={order.created_at}
           price={order.price}
         />
         
          ))}
        </div>
      </div>
    </div>
  );
};
