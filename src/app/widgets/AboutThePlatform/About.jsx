import React from 'react';
import styles from './style.module.css';

const About = () => {
  return (
    <div className={styles.aboutPlatform}>
      <div className={styles.container}>
        <div className={styles.about}>
          <h1>О платформе</h1>
          <span>
            IBP — платформа для малого и среднего бизнеса, сайт для оптовых
            покупателей и продавцов. Помогаем компаниям России и СНГ быстро
            находить лучших поставщиков и новых клиентов, продвигать свою
            продукцию в интернете.
          </span>
        </div>
        <div className={styles.sale}>
          <div className={styles.customers}>
            <h2>Оптовым покупателям</h2>
            <span>
              Упрощаем процесс закупки, позволяем быстро находить лучших
              поставщиков и экономить до 40%.
            </span>
            <button>Найти поставщиков</button>
          </div>
          <div className={styles.customers}>
            <h2>Оптовым продавцам</h2>
            <span>
              Получайте новых клиентов – ежедневно на платформе компании
              размещают больше 1500 заказов на поиск поставщика.
            </span>
            <button>Найти клиентов</button>
          </div>
        </div>
        <div className={styles.statistics}>
          <div className={styles.examples}>
            <div className={styles.example}>
              <img
                src='https://suplbiz-a.akamaihd.net/promotionx2/orders.png'
                alt='point'
              />
              <h2>650</h2>
              <p>городов России и СНГ</p>
            </div>
            <div className={styles.example}>
              <img
                src='https://72328.selcdn.ru/static/about/visitors.svg'
                alt='point'
              />
              <h2>400 000</h2>
              <p>посетителей сайта в месяц</p>
            </div>
            <div className={styles.example}>
              <img
                src='https://suplbiz-a.akamaihd.net/promotionx2/contacts.png'
                alt='point'
              />
              <h2>1 766 720</h2>
              <p>оптовых заказов</p>
            </div>
            <div className={styles.example}>
              <img
                src='https://72328.selcdn.ru/static/about/product.svg'
                alt='point'
              />
              <h2>13 863 858</h2>
              <p>товаров в каталоге</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
