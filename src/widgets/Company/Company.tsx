"use client"
import styles from './company.module.scss'
import { Button } from '@/shared/ui/button'
import Image from 'next/image'
import ContactImg from '../../../public/contacts.png'
import OrdersImg from '../../../public/orders.png'
import VisitorsImg from '../../../public/visitors.svg'
import React from 'react'
import ProductImg from '../../../public/product.svg'

export const Company:React.FC = ():React.JSX.Element => {
	return (
		<div className={styles.company}>
            <div className={styles.container}>
				<div className={styles.title}>С нами работают <span>23</span> компании</div>

                <div className={styles.topRow}>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                </div>
            </div>
        </div>
	)
}


