import React from 'react'
import styles from './style.module.scss'

export const CompanyPageNav = () => {
  return (
    <div className={styles.container}>
        <button className={styles.active}>Товары и услуги</button>
        <button>О компании</button>
        <button>Реквизиты</button>
        <button>Отзывы</button>
    </div>
  )
}

