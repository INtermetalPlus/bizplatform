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
      <div className={styles.input_icon}>
      <input
        type="text"
        placeholder="Найти заказ"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchInput}
        ref={changeSearch}
        
      />
      <svg
      
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 26.75L21.8751 22.375M25 14.875C25 20.743 20.243 25.5 14.375 25.5C8.50697 25.5 3.75 20.743 3.75 14.875C3.75 9.00697 8.50697 4.25 14.375 4.25C20.243 4.25 25 9.00697 25 14.875Z"
            stroke="#ADADAD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </div>
      {/* <Image
      width={22.5}
      height={22.5}
      src={loop}
      alt="search icon"
      className={styles.searchIcon}
      onClick={activateInput}
      /> */}

      
        
      

    </form>
  );
};
