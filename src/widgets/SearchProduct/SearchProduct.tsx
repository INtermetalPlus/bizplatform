"use client";
import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchProduct.module.scss";
import { BlueButton } from "@/shared/ui/blueButton";
import { Select } from "@/shared/ui/select";
import { SearchField } from "@/features/searchField";
import { SelectButton } from "@/shared/ui/selectButton";
interface SearchFieldProps {
  onSearch?: (term: string) => void;
}

export const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.main}>
      <div className={styles.headerSearch}>
        <h2>Найти или добавить свой товар</h2>
        <BlueButton type="primaryButton" width="385px" text="Добавить товар" />
      </div>
      <div className={styles.secondBlock}>
        <Select width="385px" options={["Кыргызстан", "Казахстан", "Россия"]} />
        <SearchField />
        <div>
          <BlueButton type="primaryButton" width="192.5px" text="Заказы" />
          <BlueButton type="secondaryButton" width="192.5px" text="Товары" />
        </div>
      </div>
      <div className={styles.thirdBlock}>
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton
          text="Потребительские товары 
и спецмагазины"
        />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
        <SelectButton text="Автотовары и автосервис" />
      </div>
    </div>
  );
};
