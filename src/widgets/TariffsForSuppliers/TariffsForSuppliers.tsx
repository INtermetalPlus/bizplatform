"use client";
import React, { useState } from "react";
import styles from "./TariffsForSuppliers.module.scss";
import { BlueButton } from "@/shared/ui/blueButton";
import Image from "next/image";
import Demo from "./Демо.png";
import Premium from "./Премиум.png";
import Standart from "./Стандарт.png";
import Check123 from "./check123.png";
import Chel from "./Group (1).png";
import { Input } from "@/shared/ui/input";
import { SendAnApplication } from '../../widgets/SendAnApplicationModal/SendAnApplication'

interface Price {
  standard: number;
  premium: number;
}

export const TariffsForSuppliers: React.FC = () => {
  const [currency, setCurrency] = useState<string>('USD');
  const [price, setPrice] = useState<Price>({ standard: 100, premium: 300 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrency(value);
    if (value === 'SOM') {
      setPrice({ standard: 10000, premium: 30000 });
    } else if (value === 'RUB') {
      setPrice({ standard: 7500, premium: 22500 });
    } else {
      setPrice({ standard: 100, premium: 300 });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.prises}>
        <div>
          <h2>Цены на тарифы для поставщиков</h2>
        </div>
        <div className={styles.check}>
          <div className={styles.inputs}>
            <input type="radio" value="SOM" checked={currency === 'SOM'} onChange={handleCurrencyChange} /> <span>SOM</span>
          </div>
          <div className={styles.inputs}>
            <input type="radio" value="RUB" checked={currency === 'RUB'} onChange={handleCurrencyChange} /> <span>RUB</span>
          </div>
          <div className={styles.inputs}>
            <input type="radio" value="USD" checked={currency === 'USD'} onChange={handleCurrencyChange} /> <span>USD</span>
          </div>
        </div>
        <div className={styles.tablo}>
          <div className={styles.doska}>
            <div className={styles.first}>
              <div>
                <p className={styles.black}>Версия</p>
                <p className={styles.blue}>демо</p>
              </div>
              <Image src={Demo} alt="demo" width={183} height={166} />
            </div>
            <div className={styles.tarif}>
              <div style={{ height: "78.93px" }}>
                <p className={styles.black}>Бесплатно</p>
              </div>
              <div className={styles.checkBox}>
                <label htmlFor="">
                  <Image src={Check123} alt="demo" width={28} height={28} />
                  Возможность разместить 5 заказов
                </label>
              </div>
            </div>
            <div className={styles.button}>
              <BlueButton
                type="primaryButton"
                width="385px"
                text="Выбрать тариф"
                onClick={openModal}
              />
            </div>
          </div>
          <div className={styles.doska}>
            <div className={styles.first}>
              <div>
                <p className={styles.black}>Поставщик</p>
                <p className={styles.blue}>стандарт</p>
              </div>
              <Image src={Standart} alt="standart" width={183} height={166} />
            </div>
            <div className={styles.tarif}>
              <div>
                <p className={styles.black}>{price.standard} {currency}</p>
                <span>1 месяц</span>
              </div>
              <div className={styles.checkBox}>
                <label htmlFor="">
                  <Image src={Check123} alt="demo" width={28} height={28} />
                  Возможность разместить 10 заказов
                </label>
                <label htmlFor="">
                  <Image src={Check123} alt="demo" width={28} height={28} />
                  Возможность разместить 10 заказов
                </label>
              </div>
            </div>
            <div className={styles.button}>
              <BlueButton
                type="primaryButton"
                width="385px"
                text="Выбрать тариф"
                onClick={openModal}
              />
            </div>
          </div>
          <div className={styles.doska}>
            <div className={styles.first}>
              <div>
                <p className={styles.black}>Поставщик</p>
                <p className={styles.blue}>премиум</p>
              </div>
              <Image src={Premium} alt="premium" width={183} height={166} />
            </div>
            <div className={styles.tarif}>
              <div>
                <p className={styles.black}>{price.premium} {currency}</p>
                <span>1 год</span>
              </div>
              <div className={styles.checkBox}>
                <label htmlFor="">
                  <Image src={Check123} alt="demo" width={28} height={28} />
                  Возможность разместить 10 заказов
                </label>
                <label htmlFor="">
                  <Image src={Check123} alt="demo" width={28} height={28} />
                  Возможность разместить 10 заказов
                </label>
              </div>
            </div>
            <div className={styles.button}>
              <BlueButton
                type="primaryButton"
                width="385px"
                text="Выбрать тариф"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderDemonstration}>
        <div className={styles.text}>
          <div className={styles.orderTel}>
            <p>Заказать бесплатную демонстрацию</p>
            <span>
              Если хотите попробовать бесплатную демонстрацию тарифа, оставьте
              свой номер телефона <br/> и ожидайте звонок от менеджера
            </span>
          </div>
          <div className={styles.tel}>
            <Input type="tel" placeholder="+996" />
            <BlueButton type="primaryButton" width="385px" text="Отправить" />
          </div>
        </div>

        <div className={styles.kartinka}>
          <Image src={Chel} alt="chel" width={338} height={254} />
        </div>
      </div>
      {isModalOpen && <SendAnApplication closeModalWindow={() => setIsModalOpen(false)} />}
    </div>
  );
};
