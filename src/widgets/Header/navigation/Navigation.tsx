"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import languagePick from "./../../../shared/assets/home/header/language_option.png";
import {ModalWindowReg} from "../../Modalwindow/ModalWindowReg";
import {AuthorizationModal} from '../../AuthorizationModal/AuthorizationModal'

import Link from "next/link";


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
export const Navigation:React.FC = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  
  const openLoginWindow = () => {
    setLoginModalOpen(true);  
  }

  const openAuthWindow = () => {
    setAuthModalOpen(true);  
  }

  const closeLoginWindow = () => {
    setLoginModalOpen(false);
  }

  const closeAuthWindow = () => {
    setAuthModalOpen(false);
  }


  return (
    <div className={styles.header}>
      <header className={styles.page_header}>
        <div className={styles.icon}>
          <a className={styles.link} href="/">
            <span className={styles.first}>IBP</span>
          </a>
        </div>
        <nav className={styles.item_nav}>
          <div className={styles.nav}>
            <Link href="/orders" className={styles.menu_item}>
              Все заказы
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="/goods" className={styles.menu_item}>
              Товары
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="/tariffs" className={styles.menu_item}>
              Цены на тарифы
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="/about" className={styles.menu_item}>
              О платформе
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="/requisites" className={`${styles.menu_item} ${styles.activeMenu}`}>
              Реквизиты
            </Link>
          </div>
          <div className={styles.nav}>
            <Link href="#" className={styles.menu_item}>
              Помощь
            </Link>
          </div>
          <Select text="Еще" options={["Блог"]} />

          <div className={styles.header_info}>
            <Image
              src={languagePick}
              width={24}
              height={24}
              alt="ru lang"
              className="lang"
            />
          </div>


          <div className={styles.auth}>
          <span>
              <button className={styles.register} onClick={openLoginWindow}>Регистрация</button>
              <button className={styles.login} onClick={openAuthWindow}>Вход</button>
            </span>
          </div>
        </nav>
      </header>
      {loginModalOpen && <ModalWindowReg closeModalWindow={closeLoginWindow} />}
      {authModalOpen && <AuthorizationModal closeModalWindow={closeAuthWindow} />}
    </div>

  );
};
