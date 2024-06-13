import Link from 'next/link'
import ui from './SOF_UI.module.scss'
import '../../../app/globalStyle.css'
import Image from 'next/image'
import cross from '../../assets/icons/x-close.png'
import { SOP_tarrifModal } from '@/features/lib/helpers/CustomHook'
import { useEffect } from 'react'


export default function SOF_tariffModal() {
    const {isTarrifModal, closeTarrifModal} = SOP_tarrifModal()


    useEffect(() => {
        if(isTarrifModal){
            document.body.style.overflowY = 'hidden'
        }else {
            document.body.style.overflowY = 'visible'
        }
    }, [isTarrifModal])


    const handleOutsideClick = (event: React.MouseEvent) => {
        if (event.currentTarget === event.target) {
            closeTarrifModal();
        }
    };

    return (
        <>
            {isTarrifModal && (
                <div className={ui.modal_background} onClick={handleOutsideClick}>
                    <div className={ui.tariffModal}>
                        <Image
                        width={24}
                        height={24}
                        alt='cross'
                        src={cross}
                        className={ui.cross}
                        onClick={closeTarrifModal}
                        />
                        <h1 className={ui.tariffModal__header}>Для доступа к контактам необходимо приобрести платный тариф</h1>
                        <Link href='/tariffs' className={ui.tariffModal__link_container}>
                            <p className={ui.tariffModal__link}>Посмотреть цены на тарифы</p>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}