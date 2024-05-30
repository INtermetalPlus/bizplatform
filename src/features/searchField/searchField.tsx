"use client";
import React, { FC, useState, ChangeEvent, FormEvent, useRef } from "react";
import styles from "./searchField.module.scss";
import Image from "next/image";
import loop from '../../shared/assets/icons/search-icon.png'


interface SearchFieldProps {
  onSearch?: (term: string) => void;
}


export const SearchField: FC<SearchFieldProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch?.(searchTerm);
  };


  const changeSearch = useRef<HTMLInputElement>(null)

  const activateInput = () => {
    if(changeSearch.current){
      changeSearch.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Найти заказ"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
        ref={changeSearch}
      />
      <Image
      width={22.5}
      height={22.5}
      src={loop}
      alt="search icon"
      className={styles.searchIcon}
      onClick={activateInput}
      />
    </form>
  );
};
