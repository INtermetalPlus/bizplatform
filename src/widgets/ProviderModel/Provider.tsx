'use client'
import styles from "./Provider.module.scss";
import React from "react";
import { closeApplicationModal, closeModal } from "@/features/lib/helpers/CloseHook";
import Plus from "../../shared/assets/icons/plus.svg";
import { Select } from "@/shared/ui/select";
import { BlueButton } from "@/shared/ui/blueButton";
import { IndicateRegion } from "../IndicateRegion";
import closeModalIcon from '../../shared/assets/home/header/icons/modalWIndow-close--icon.png';
import Image from "next/image";

interface AddProviderProps {
    onClose: () => void;
}

export const Provider: React.FC<AddProviderProps> = ({ onClose }) => {
    const { isOpen, open, close } = closeModal();
    
    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            <div className={styles.main}>
                <div className={styles.closeModalWindow} onClick={onClose}>
                    <Image
                        src={closeModalIcon}
                        width={15}
                        height={15}
                        alt="close"
                    />
                </div>
                <div className={styles.header}>
                    <h3>Разместить свой заказ</h3>
                    <h3 className={styles.header_title}>Разместите свой заказ и сэкономьте себе время!</h3>
                </div>
                <div className={styles.block}>
                    <div className={styles.addForm}>
                        <label>
                            Введите наименование товара или услуги
                            <input
                                type="text"
                                name="name"
                                style={{ width: "1150px", height: "69px" }}
                                placeholder="Наименование товара или услуги"
                            />
                        </label>
                        <label>
                            Описание товара
                            <textarea
                                name="description"
                                style={{ width: "1150px", height: "200px" }}
                                placeholder="У этого товара..."
                            />
                        </label>
                        <div style={{ display: "flex", gap: "12px" }}>
                            <label style={{ marginBottom: "0", marginTop: "0" }}>
                                Категория
                                <Select
                                    type="secondarySelect"
                                    width="565px"
                                    options={[
                                        "Автотовары"
                                    ]}
                                />
                            </label>
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                                <div className={styles.blog_1}>
                                Поставщики из
                                <button className={styles.regions} onClick={open}>
                                    <span>Выбрать регион</span>
                                    <Image src={Plus} alt="plus" width={30} height={30} />
                                </button>
                                {isOpen && (
                                    <IndicateRegion onClose={close} />
                                )}
                                </div>
                            
                                <div className={styles.blog_1}>
                                Поставка в
                                <button className={styles.regions} onClick={open}>
                                    <span>Выбрать регион</span>
                                    <Image src={Plus} alt="plus" width={30} height={30} />
                                </button>
                                {isOpen && (
                                    <IndicateRegion onClose={close} />
                                )}
                                </div>
                            
                        </div>
                        <div style={{ display: "flex", gap: "12px" }}>
                            <label>
                                Номер телефона
                                <input
                                    type="text"
                                    name="phone"
                                    style={{ width: "546px", height: "64px" }}
                                    placeholder="+996"
                                />
                            </label>
                            <label>
                                Электронная почта
                                <input
                                    type="text"
                                    name="email"
                                    style={{ width: "546px", height: "64px" }}
                                    placeholder="email@gmail.com"
                                />
                            </label>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <BlueButton
                                type="primaryButton"
                                width="385px"
                                text="Найти поставщиков"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
