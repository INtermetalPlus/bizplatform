import React from 'react';
import styles from './select.module.scss';
import Image from 'next/image';
import IconWhite from './arrow_forward_ios.svg';
import IconBlack from './chevron-down.svg'

interface Option {
  value: number;
  label: string;
}

interface SelectProps {
  type: string;
  width?: string;
  options: Option[];
  value: number | string | number[];
  onChange: (value: number | string | number[]) => void;
}

export const Select: React.FC<SelectProps> = ({ type, width, options, value, onChange }) => {
  const isPrimary = type === 'primarySelect';
  const selectStyle = isPrimary ? styles.primarySelect : styles.secondarySelect;
  const icon = isPrimary ? IconWhite : IconBlack;
  const iconRight = isPrimary ? '115px' : '46px';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const targetValue = event.target.value;
    if (Array.isArray(value)) {
      onChange(targetValue);
    } else {
      onChange(targetValue);
    }
  };

  return (
    <div className={styles.selectContainer}>
<select className={selectStyle} style={{width: width || ''}} value={Array.isArray(value) ? value.join(',') : value} onChange={handleChange}>
          {options.map((option, index) => (
              <option key={index} value={option.value}>
                  {option.label}
              </option>
          ))}
      </select>
      <div className={styles.icon} style={{right: iconRight}}>
        <Image src={icon} alt="arrow" width={20} height={20} />
      </div>
    </div>
  )
}
