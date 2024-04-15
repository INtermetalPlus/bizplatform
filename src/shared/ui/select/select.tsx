import React from 'react';
import styles from './select.module.scss';
import Image from 'next/image';
import IconWhite from './arrow_forward_ios.svg';
import IconBlack from './chevron-down.svg'

export const Select = ({ type, width, options }: { type: string, width?: string, options: string[] }): JSX.Element => {
  const isPrimary = type === 'primarySelect';
  const selectStyle = isPrimary ? styles.primarySelect : styles.secondarySelect;
  const icon = isPrimary ? IconWhite : IconBlack;
  const iconRight = isPrimary ? '115px' : '46px';


  return (
    <div className={styles.selectContainer}>
      <select className={selectStyle} style={{width: width || ''}}>
          {options.map((option, index) => (
              <option key={index} value={option}>
                  {option}
              </option>
          ))}
      </select>
      <div className={styles.icon} style={{right: iconRight}}>
        <Image src={icon} alt="arrow" width={20} height={20} />
      </div>
    </div>
  )
}
