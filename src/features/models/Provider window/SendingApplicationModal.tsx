'use client'
import React from "react";
import { applicationModal } from "@/features/lib/helpers/CustomHook";
import Image from "next/image";
import cross from '../../../shared/assets/icons/x-close.png'
import access_ellipse from '../../../shared/assets/images/access-aplication--image.png'
import styles from './SAM_ui.module.scss'


export const SendingApplicationModal: React.FC = () => {
    const {SAM_modal, close_SAM_modal} = applicationModal()

    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            close_SAM_modal();
        }
    };

    return (
        <>
            {SAM_modal && (
                <div className={styles.modal_background} onClick={handleOutsideClick}>
                    <div className={styles.aplication_modal}>
                        <Image
                        width={12}
                        height={12}
                        src={cross}
                        alt="close application"
                        className={styles.aplication_modal__cross}
                        onClick={close_SAM_modal}
                        />
                        <h1 className={styles.aplication_modal__header}>Заявка принята</h1>
                        <span className={styles.aplication_modal__description}>
                            Ваш запрос будет обработан нашим менеджером, который свяжется с вами в ближайшее время.
                            </span>
                        <Image
                        width={105}
                        height={105}
                        src={access_ellipse}
                        alt="ellipse"
                        className={styles.aplication_modal__ellipse}
                        />
                    </div>
                </div>
            )}
        </>
    )
}