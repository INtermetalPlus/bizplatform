import styles from './blueButton.module.scss'

interface ButtonProps {
  width?: string;
  text: string;
  type: 'primaryButton' | 'secondaryButton';
}

export const BlueButton = ({ width, text, type }: ButtonProps): JSX.Element => {
  const buttonStyle = type === 'primaryButton' ? styles.primaryButton : styles.secondaryButton;

  return (
    <button className={`${styles.btn} ${buttonStyle}`} style={{width: width || ''}}>
        {text}
    </button>
  )
}
