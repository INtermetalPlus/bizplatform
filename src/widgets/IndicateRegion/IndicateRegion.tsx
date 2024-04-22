import React from "react";
import styles from "./IndicateRegion.module.scss";
import Krestik from "./x-close.png";
import Image from "next/image";
import { BlueButton } from "@/shared/ui/blueButton";
import { Select } from "antd";

const { Option } = Select;
const options = [
  { value: "Электроника", label: "Кыргызстан" },
  { value: "С", label: "Кыргызстан" },
  { value: "Стрww", label: "Кыргызстан" },
  { value: "Стрw1", label: "Кыргызстан" },
  { value: "Стрw", label: "Кыргызстан" },
  { value: "Строw", label: "Кыргызстан" },
  { value: "Строите", label: "Кыргызстан" },
  { value: "Строитель", label: "Кыргызстан" },
];

interface IndicateRegionProps {
  onClose: () => void;
}

export const IndicateRegion: React.FC<IndicateRegionProps> = ({ onClose }) => {
  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  const MAX_COUNT = 1;

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <Image
        src={Krestik}
        width={24}
        height={24}
        alt="krestik"
        className={styles.krestik}
        onClick={handleOutsideClick}
      />
      <div className={styles.main}>
        <div>
          <p>Укажите регион</p>
          <Select
            maxCount={MAX_COUNT}
            mode="multiple"
            className={styles.select}
            defaultValue="Категории"
            optionLabelProp="label"
            style={{ width: "100%" }}
            placeholder="Найти регион"
            open={true}

          >
            {options.map((option) => (
              <Option
                key={option.value}
                optionFontSize={22}
                value={option.value}
                label={option.label}
              >
                <div className={styles.divSelect}>{option.label}</div>
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <BlueButton
            type="primaryButton"
            width="460px"
            text="Выбрать регион"
          />
        </div>
      </div>
    </div>
  );
};
