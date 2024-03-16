'use client'
import React, { useState } from 'react';
import styles from "./Navigation.module.scss";

const Select = ({text,options}:{text: string, options: string[]}) => {
    const [hover,setHover] = useState(false)
    return (
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={() =>  setHover(false)} className={styles.menu_item_d}>
        {text}
        <div className={styles.dropdown}>
            {
                options.map(item=>(
                    <div className={styles.dropdown_menu} key={item}>{item}</div>
                ))           
            }
        </div>
        </div>
    )
}
const Navigation = () => {
  return (
    <div className={styles.header}>
      <header className={styles.page_header}>
        
        <div className={styles.icon}>
            <button>Supl.biz</button>
        </div>
        <nav className={styles.item_nav}>
            <div className={styles.nav}>
                <a href="" className={styles.menu_item}>Все заказы</a>
            </div>
            <div className={styles.nav}>
                <a href="" className={styles.menu_item}>Мои заказы</a>
            </div>
            <div className={styles.nav}>
                <a href="" className={styles.menu_item}>Товары</a>
            </div>
            <div className={styles.nav}>
                <a href="" className={styles.menu_item}>Цены на тарифы</a>
            </div>
        <Select text='Еще' options={['О платформе','Блог','Реквизиты', 'Купить баннер','Вакансии','СМИ о нас','Бонусы от партнеров','Помощь','Франшиза']}/>
            {/* <div className={styles.menu_item_d}>
            Еще
                <div className={styles.dropdown}>
                    <div className={styles.dropdown_menu}></div>
                    <div className={styles.dropdown_menu}></div>
                    <div className={styles.dropdown_menu}></div>
                    <div className={styles.dropdown_menu}>Купить баннер</div>
                    <div className={styles.dropdown_menu}>Вакансии</div>
                    <div className={styles.dropdown_menu}>СМИ о нас</div>
                    <div className={styles.dropdown_menu}>Бонусы от партнеров</div>
                    <div className={styles.dropdown_menu}>Помощь</div>
                    <div className={styles.dropdown_menu}>Франшиза</div>
                </div>
            </div> */}
        </nav>
        <div className={styles.header_info}>
            <span className={styles.info}>
                <span className={styles.blog_phone}>
                    <a href="" className={styles.item_phone}>+12345678</a>
                </span>
                <span className={styles.info}>звонок бесплатный</span>
            </span>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
