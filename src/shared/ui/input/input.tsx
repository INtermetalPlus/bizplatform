import styles from './input.module.scss'

export const Input = ({ type, placeholder }: { type: string, placeholder: string }): JSX.Element => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder || ''} />
  )
}
