"use client";
import React, { useEffect, useState } from "react";
import styles from "./AllOrder.module.scss";
// another styles
import '../../app/globalStyle.css'
import './ui.css'
// other
import { SearchField } from "@/features/searchField";
import { BlueButton } from "@/shared/ui/blueButton";
import Image from "next/image";
import Plus from "../../shared/assets/icons/plus.svg";
import arrowDown from "../../shared/assets/icons/arrow_forward_ios (1).svg";
import { Select } from "antd";
import SelectIcon from "../../shared/assets/icons/Frame 220.png";
import { IndicateRegion } from "../IndicateRegion";
import { AO_header } from "@/shared/ui/AllOrder/AO_header";
import { AO_headerInfo } from "@/shared/ui/AllOrder/AO_headerInfo";
import { AO_mainModal, closeModal, hideViewed } from "@/features/lib/helpers/CustomHook";
import { useOrders } from "@/features/lib/storage/OrderStore";
import { Provider } from "../AO_ProviderModal/Provider";
import { useSimilarStore } from "@/features/lib/storage/SimilarOrderStore/SimilarOrderStore";
import Link from "next/link";
import { useSession } from "next-auth/react";


const { Option } = Select;


export const AllOrder: React.FC = () => {
  const {orders, fetchOrders} = useOrders()
  const {isOpen, open} = closeModal()
  const {openMainModal} = AO_mainModal()
  const {isViewed, hide, show} = hideViewed()
  const [orderComplited, setOrderComplited] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    if(session) {
    fetchOrders(session.user.rawAccessToken)
    }
  }, [fetchOrders,session])


  const options = [
    {value: 0, label: 'Электроника' },
    {value: 1, label: 'Строительство и Ремонт' },
    {value: 2, label: 'Недвижимость' },
    {value: 3, label: 'Строительство' },
    {value: 4, label: 'Ремонт' },
    {value: 5, label: 'Стройматериалы' },
    {value: 6, label: 'Дизайн и Декор' },
    {value: 7, label: 'Инженерные Системы' },
  ]
  

  const changeOrderTheme = () => {
    setOrderComplited(!orderComplited)
  }

  const hideComplitedOrders = (e: any) => {
    setOrderComplited(e.target.checked)
  }


  const {addOrder} = useSimilarStore()
  const moreOrderInfo = (id: any) => {
    addOrder(id)
  }

  const truncateWords = (text: string, wordLimit: number): string => {
    const words = text.split(' ');
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
  }


  return (
    <>
      <div className={styles.main}>
        <AO_header/>
        <AO_headerInfo/>
        <div className={styles.secondBlock}>
          <div className={styles.categories}>
            <div className={styles.selectDiv}>
            {" "}
              <div className={styles.select_categories_block}>
                <Select
                suffixIcon={null}
                className={styles.categories_select}
                defaultValue="Категории"
                variant="borderless"
                >
                {options.map((options) => (
                  <Option key={options.value} optionFontSize={22}  value={options.value} label={options.label}>
                    <div className={styles.divSelect}>
                      <Image src={SelectIcon} alt="eye" width={48} height={48} className={styles.divSelect__arrow}/>
                      {options.label.split(' ').map((word, index, array) => (
                        <div key={index}>
                          {word}
                          {index < array.length - 1 && ' '}
                        </div>
                      ))}
                    </div>
                  </Option>
                ))}
                </Select>
                <Image
                src={arrowDown} 
                alt="down arrow" 
                width={20} 
                height={20} 
                className={styles.categories_select__arrow}
                />
              </div>
              {" "}
            </div>
            <button className={styles.regions} onClick={open}>
              <span>Регионы</span>
              <Image src={Plus} alt="plus" width={30} height={30} />
            </button>
            {" "}
            {isOpen && (
              <IndicateRegion onClose={close}/>
            )}
            {" "}
            <div className={styles.price}>
              <span>Цена</span>
              <div className={styles.inputPrice}>
                <input
                type="text" 
                placeholder="0 сом" />
                <div className={styles.inputPrice__line}></div>
                <input 
                type="text" 
                placeholder="0 сом"
                />
              </div>
            </div>
            <div>
              <div className={styles.viewedCheck}>
                <span>Скрыть просмотренные</span>
                <input
                id="checkbox_1"
                type="checkbox"
                checked={orderComplited} 
                onChange={hideComplitedOrders} 
                className={styles.viewedCheck__hide_viewed}
                />
                <label htmlFor="checkbox_1" className={styles.completedCheck_label__2}></label>
              </div>
              <div className={styles.completedCheck}>
                <span>Скрыть завершенные</span>
                <input
                id="checkbox_2"
                type="checkbox"
                className={styles.check} 
                onChange={e => {
                  if(e.target.checked){
                    orders.forEach(item => show(item.id))
                  } else {
                    orders.forEach(item => hide(item.id))
                  }
                }}
                />
                <label htmlFor="checkbox_2" className={styles.completedCheck_label}></label>
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
              onClick={openMainModal}
              />
              <Provider />
            </div>
            <Link href='/similarorder' className={styles.link}>
              {orders.map((item) => (
                !isViewed[item.id] && (
                  <div 
                  key={item.id}
                  onClick={() => moreOrderInfo(item)}
                  className={orderComplited ? styles.completed_orders_frame : styles.orders_frame} 
                  >
                    <div className={styles.orders_frame__order_number}>
                      <span>Заказ № {item.order_number}</span>
                      <span>2 апреля 2024, 13:09</span>
                    </div>
                    <h1 className={orderComplited ? styles.completed_orders_frame__order_title : styles.orders_frame__order_title}>
                      {item.order_title}
                    </h1>
                    <span className={orderComplited ? styles.completed_orders_frame__order_description : styles.orders_frame__order_description}>
                      {truncateWords(item.order_text, 14)}
                    </span>
                    <div className={styles.orders_frame__order_place}>
                      <p className={orderComplited ? styles.completed_orders_frame__order_city : styles.orders_frame__order_city }>
                        Поставка в Бишкек
                      </p>
                      <button className={orderComplited ? styles.completed_orders_frame__eye : styles.orders_frame__eye} onClick={changeOrderTheme} />
                    </div>
                  </div>
                )
              ))}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
