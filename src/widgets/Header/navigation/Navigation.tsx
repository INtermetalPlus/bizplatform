"use client";
import React, { useState } from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import { useAuthStore } from "@/features/Login/api/useAuthStore";
import languagePick from "./../../../shared/assets/home/header/language_option.png";
import mailHeader from "./../../../shared/assets/home/header/mail_header.png";
import menuHeader from "./../../../shared/assets/home/header/menu_header.png";
import messageHeader from "./../../../shared/assets/home/header/message_header.png";
import { ModalWindowReg } from "../../Modalwindow/ModalWindowReg";
import {AuthorizationModal} from '../../AuthorizationModal/AuthorizationModal'
import Link from "next/link";
import RegisterVerification from "@/shared/modals/registerVerification/RegisterVerification";
import { useSession } from "next-auth/react";

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
 const session = useSession()
 const { isAuthenticated, setLoginModalOpen, setAuthModalOpen, loginModalOpen, authModalOpen,
  registerVerification, setRegisterVerification
  } = useAuthStore()
  
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

  const closeVerificationWidnow = () => {
    setRegisterVerification(false);
  }


  return (
    <div className={styles.header}>
      <header className={styles.page_header}>
        <div className={styles.icon}>
          <a className={styles.link} href="/">
            <span className={`${styles.first}`}>IBP</span>
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
            {!session?.data?.user ? (
               <span>
               <button className={styles.register} onClick={openAuthWindow}>Регистрация</button>
               <button className={styles.login} onClick={openLoginWindow}>Вход</button>
             </span>
            ): (
              <>
              <Link href={'/mail'}>
                <Image src={mailHeader} alt="mail" width={24} height={24} />
              </Link>
              <Link href={'/chat'}>
                <Image src={messageHeader} alt="message" width={24} height={24} />
              </Link>
             
                <Image onClick={() => console.log('Clicked on menu')} src={menuHeader} alt="menu" width={24} height={24} />
             
              </>
            )}
         
          </div>
        </nav>
      </header>
      {authModalOpen && <ModalWindowReg closeModalWindow={closeAuthWindow} />}
      {loginModalOpen && <AuthorizationModal closeModalWindow={closeLoginWindow} />}
      {registerVerification && <RegisterVerification closeModalWindow={closeVerificationWidnow} /> }
    </div>
  );
};
