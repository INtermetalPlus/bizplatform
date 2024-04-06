"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import languagePick from "./../../../shared/assets/home/header/language_option.png";

const Select = ({ text, options }: { text: string; options: string[] }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.menu_item_d}
    >
      {text}
      <div className={styles.dropdown}>
        {options.map((item) => (
          <div className={styles.dropdown_menu} key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export const Navigation: React.FC = () => {
  return (
    <div className={styles.header}>
      <header className={styles.page_header}>
        <div className={styles.icon}>
          <a className={styles.link} href="/ru/">
            <span className={styles.first}>IBP</span>
          </a>
        </div>
        <nav className={styles.item_nav}>
          <div className={styles.nav}>
            <a href="#" className={styles.menu_item}>
              Все заказы
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#" className={styles.menu_item}>
              Товары
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#" className={styles.menu_item}>
              Цены на тарифы
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#" className={styles.menu_item}>
              О платформе
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#" className={`${styles.menu_item} ${styles.activeMenu}`}>
              Реквизиты
            </a>
          </div>
          <div className={styles.nav}>
            <a href="#" className={styles.menu_item}>
              Помощь
            </a>
          </div>
          <Select text="Еще" options={["Блог"]} />

          <div className={styles.header_info}>
            <Image
              src={languagePick}
              width={24}
              height={24}
              alt=""
              className="lang"
            />
          </div>

          <div className={styles.auth}>
            <span>
              <button className={styles.register}>Регистрация</button>
              <button className={styles.login}>Логин</button>
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};