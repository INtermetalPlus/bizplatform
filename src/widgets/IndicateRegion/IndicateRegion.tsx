import React from "react";
import styles from "./IndicateRegion.module.scss";
import './IR_styles.css'

import Image from "next/image";
import cross from "../../shared/assets/icons/x-close.png";
import { IR_btn } from "@/shared/ui/IndicateRegion/IR_btn";
import { closeModal } from "@/features/lib/helpers/CloseHook";
import { Select } from "antd";


const { Option } = Select;
const options = [
  { value: 1, label: "Чуйская область" },
  { value: 2, label: "-" },
  { value: 3, label: "-" },
  { value: 4, label: "-" },
  { value: 5, label: "-" },
  { value: 6, label: "-" },
  { value: 7, label: "-" },
  { value: 8, label: "-" },
];

interface IndicateRegionProps {
  onClose: () => void;
}

export const IndicateRegion: React.FC<IndicateRegionProps> = () => {
  const {isOpen, close} = closeModal()

  const MAX_COUNT = 1;

  return (
    <>
    {isOpen && (
      <div className={styles.modal}>
      <Image
      src={cross}
      width={24}
      height={24}
      alt="close"
      className={styles.closeModal__icon}
      onClick={close}
      />
      <div className={styles.main}>
        <div>
          <p>Укажите регион</p>
          <Select
          maxCount={MAX_COUNT}
          mode="multiple"
          className={styles.optionList}
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
              className={styles.optionList__label_main}
              >
                <div className={styles.divSelect}>{option.label}</div>
              </Option>
            ))}
          </Select>
        </div>
        <div>
          <IR_btn/>
        </div>
      </div>
    </div>
    )}
    </>
  );
};
