import styles from './select.module.scss';
import Image from 'next/image';
import Icon from './arrow_forward_ios.svg';
export const Select = ({ width, options }: { width?: string, options: string[] }): JSX.Element => {
  return (
    <div>
    <select className={styles.select} style={{width: width || ''}}>
        {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
    <div className={styles.icon}>
    <Image src={Icon} alt="arrow" width={20} height={20} />
    </div>
    </div>
  )
}
