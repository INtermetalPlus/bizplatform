import React from "react";
import styles from './StatickDataItem.module.scss'
import gameIcon from '../../../public/orderGamePad-icon.png'
import Image from "next/image";


export const StatickDataItem: React.FC = () => {
    return (
        <div className={styles.orderList__container}>
                <div className={styles.orderList__orderFrame}>
                    <div className={styles.orderFrame__header}>
                        <Image
                        width={36}
                        height={36}
                        src={gameIcon}
                        alt="goods & services icon"
                        className={styles.orderFrame__icon}
                        />
                        <h4>Электроника</h4>
                    </div>
                    <div className={styles.orderFrame_content}>
                        <h5 className={styles.orderFrame__infoText}>Подкатегория</h5>
                        <span className={styles.orderFrame__infoText}>
                        Xbox, SonyPlayStation V, PC, Laptop
                        </span>
                        <a href="#" className={styles.OrderFrame__showMore}>Ещё 10</a>
                    </div>
                </div>
                <div className={styles.orderList__orderFrame}>
                    <div className={styles.orderFrame__header}>
                        <Image
                        width={36}
                        height={36}
                        src={gameIcon}
                        alt="goods & services icon"
                        className={styles.orderFrame__icon}
                        />
                        <h4>Электроника</h4>
                    </div>
                    <div className={styles.orderFrame_content}>
                        <h5 className={styles.orderFrame__infoText}>Подкатегория</h5>
                        <span className={styles.orderFrame__infoText}>
                        Xbox, SonyPlayStation V, PC, Laptop
                        </span>
                        <a href="#" className={styles.OrderFrame__showMore}>Ещё 10</a>
                    </div>
                </div> 
                <div className={styles.orderList__orderFrame}>
                    <div className={styles.orderFrame__header}>
                        <Image
                        width={36}
                        height={36}
                        src={gameIcon}
                        alt="goods & services icon"
                        className={styles.orderFrame__icon}
                        />
                        <h4>Электроника</h4>
                    </div>
                    <div className={styles.orderFrame_content}>
                        <h5 className={styles.orderFrame__infoText}>Подкатегория</h5>
                        <span className={styles.orderFrame__infoText}>
                        Xbox, SonyPlayStation V, PC, Laptop
                        </span>
                        <a href="#" className={styles.OrderFrame__showMore}>Ещё 10</a>
                    </div>
                </div> 
                <div className={styles.orderList__orderFrame}>
                    <div className={styles.orderFrame__header}>
                        <Image
                        width={36}
                        height={36}
                        src={gameIcon}
                        alt="goods & services icon"
                        className={styles.orderFrame__icon}
                        />
                        <h4>Электроника</h4>
                    </div>
                    <div className={styles.orderFrame_content}>
                        <h5 className={styles.orderFrame__infoText}>Подкатегория</h5>
                        <span className={styles.orderFrame__infoText}>
                        Xbox, SonyPlayStation V, PC, Laptop
                        </span>
                        <a href="#" className={styles.OrderFrame__showMore}>Ещё 10</a>
                    </div>
                </div>     
            </div>      
    )
}