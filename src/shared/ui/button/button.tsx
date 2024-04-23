import styles from './button.module.scss'
export const Button = ({ width, text }: { width?: string, text: string }): JSX.Element => {
  return (
    <button className={styles.btn } style={{width:width || ''}}>
        {text}
    </button>
  )
}