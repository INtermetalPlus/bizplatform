import React from "react";
import styles from "./OfferCustomer.module.scss";
import { Order } from "@/entities/order";
import { Input } from "@/shared/ui/input";
import { BlueButton } from "@/shared/ui/blueButton";
import Image from "next/image";
import PaperClip from "./paperclip.png";

export const OfferCustomer = () => {
  const orders = [
    {
      type: "viewed",
      orderNumber: 323423,
      name: "Некий автотовар",
      commentText:
        "Вне зависимости от того, вам нужны строительные материалы, электроинструменты, краски и лаки, или же материалы для отделочных работ, мы можем удовлетворить ваши потребности и оказать полную поддержку вашему бизнесу. \n  \n Благодаря нашей оперативной доставке и высокому уровню обслуживания, вы можете быть уверены, что ваш заказ будет выполнен вовремя и с максимальным удобством для вас. Сделайте следующий шаг к успеху вашего бизнеса в области ремонта, сделайте оптовую закупку у нас сегодня и дайте вашему бизнесу рост и процветание!",
      date: "2 апреля 2024, 13:09",
      supply: "Поставка в Бишкек",
      category: "Автотовары",
      deliveryFrom: "Бишкек"
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.order}>
        {orders.map((order, index) => (
          <Order
            key={index}
            type={order.type}
            orderNumber={323423}
            name={order.name}
            commentText={order.commentText}
            date={order.date}
            supply={order.supply}
            category={order.category}
            deliveryFrom={order.deliveryFrom}
          />
        ))}
      </div>
      <div className={styles.form}>
        <div className={styles.secondBlock}>
          <h2>Оставить предложение заказчику</h2>
          <span className={styles.grey}>
            В данном поле вы можете ввести предложение или вопрос заказчику,
            если заказчик выберет ваше предложение, он свяжется с вами в чате.
          </span>

          <div className={styles.stoldec}>
            <span>Введите предложение или вопрос заказчику</span>
            <textarea
              className={styles.textarea}
              placeholder="У меня есть предложение/вопрос..."
            ></textarea>
          </div>
          <div className={styles.stroki}>
            <label className={styles.stoldec}>
              <span>Цена</span> <Input type="text" placeholder="9876" />
            </label>
            <label className={styles.stoldec}>
              <span>Валюта</span>
              <select className={styles.select}>
                <option value="">Сом</option>
                <option value="">Рубль</option>
              </select>
            </label>
          </div>
          <div className={styles.stroki}>
            <label className={styles.stoldec}>
              <span>Название компании </span>
              <Input type="text" placeholder="Название" />
            </label>
            <label className={styles.stoldec}>
              <span>Сроки поставки </span>
              <Input type="text" placeholder="6 дней" />
            </label>
          </div>
          <div className={styles.stroki}>
            <label className={styles.stoldec}>
              <span>Номер телефона </span>
              <Input type="text" placeholder="+996" />
            </label>
            <label className={styles.stoldec}>
              <span>Электронная почта </span>
              <Input type="text" placeholder="email@gmail.com" />
            </label>
          </div>
          <span className={styles.grey}>
            Нажимая кнопку «Отправить предложение», вы соглашаетесь с условиями
            использования и обработкой персональных данных.
          </span>
          <div className={styles.stroki}>
            <div className={styles.paperClip}>
            <Image src={PaperClip} alt="paperClip" width={24} height={24} />
            Добавить файл   </div>
            <BlueButton
              type="primaryButton"
              width="365px"
              text="Отправить предложение"
            />
          </div>
        </div>

  
      </div>
    </div>
  );
};
