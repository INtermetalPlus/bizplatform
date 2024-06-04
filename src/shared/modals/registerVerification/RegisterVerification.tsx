import React from 'react'
import styles from './styles.module.scss'
import { useAuthStore } from '@/features/Login/api/useAuthStore'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

interface ModalWindowRegProps {
    closeModalWindow: () => void
}


const RegisterVerification:React.FC<ModalWindowRegProps> = ({ closeModalWindow }) => {

    const { verificationToken, setRegisterVerification, setLoginModalOpen } = useAuthStore()

    const notCLosed = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

 type Code = {
     code:string;
 }


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<Code>({
        mode: 'onChange'
    })


    const onSubmit: SubmitHandler<Code> = async (data) => {

        try {
            const newRegistration = {
                verification_token:verificationToken,
                code:data.code
            }
            
            const request = await axios.post(`http://167.172.161.102:82/api/v1/verification/`, newRegistration)
            if(request.status === 201) {
                reset()
                setRegisterVerification(false)
                setLoginModalOpen(true)
            }
        } catch(e:any) {
            console.log('Error while doing verificaiton ', e)
        }
    }




  return (
    <div className={styles.modalWindow__background} onClick={closeModalWindow}>
    <div onClick={notCLosed} className={styles.newPasswordModalBlock}>
    <div className={styles.container}>
        <div className={styles.changePassword}>
            <h2>Подтверждение</h2>
            <svg
                onClick={closeModalWindow}
                className={styles.closeIcon}
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
            >
                <path
                    d='M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </svg>
            <div className={styles.register}>
                <p>
                    Напишите код,
                    <span> который мы отправили вам на почту</span>
                </p>
            </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input type='text' placeholder='Ваш код'
             {...register('code', {
                // 'error' т.к. отображаю компонент а не сообщ.
                required: 'Введите код',
            })}
            onChange={(e) => setValue('code', e.target.value)}

            />
            <svg
                className={styles.warningIcon}
                xmlns='http://www.w3.org/2000/svg'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
            >
                <path
                    d='M13 0.75C16.2489 0.75 19.3647 2.04062 21.6621 4.33794C23.9594 6.63526 25.25 9.7511 25.25 13C25.25 16.2489 23.9594 19.3647 21.6621 21.6621C19.3647 23.9594 16.2489 25.25 13 25.25C9.7511 25.25 6.63526 23.9594 4.33794 21.6621C2.04062 19.3647 0.75 16.2489 0.75 13C0.75 9.7511 2.04062 6.63526 4.33794 4.33794C6.63526 2.04062 9.7511 0.75 13 0.75ZM13 23.5C15.7848 23.5 18.4555 22.3938 20.4246 20.4246C22.3938 18.4555 23.5 15.7848 23.5 13C23.5 10.2152 22.3938 7.54451 20.4246 5.57538C18.4555 3.60625 15.7848 2.5 13 2.5C10.2152 2.5 7.54451 3.60625 5.57538 5.57538C3.60625 7.54451 2.5 10.2152 2.5 13C2.5 15.7848 3.60625 18.4555 5.57538 20.4246C7.54451 22.3938 10.2152 23.5 13 23.5ZM14.3125 18.6875C14.3125 19.0356 14.1742 19.3694 13.9281 19.6156C13.6819 19.8617 13.3481 20 13 20C12.6519 20 12.3181 19.8617 12.0719 19.6156C11.8258 19.3694 11.6875 19.0356 11.6875 18.6875C11.6875 18.3394 11.8258 18.0056 12.0719 17.7594C12.3181 17.5133 12.6519 17.375 13 17.375C13.3481 17.375 13.6819 17.5133 13.9281 17.7594C14.1742 18.0056 14.3125 18.3394 14.3125 18.6875ZM13 6C13.2321 6 13.4546 6.09219 13.6187 6.25628C13.7828 6.42038 13.875 6.64294 13.875 6.875V14.75C13.875 14.9821 13.7828 15.2046 13.6187 15.3687C13.4546 15.5328 13.2321 15.625 13 15.625C12.7679 15.625 12.5454 15.5328 12.3813 15.3687C12.2172 15.2046 12.125 14.9821 12.125 14.75V6.875C12.125 6.64294 12.2172 6.42038 12.3813 6.25628C12.5454 6.09219 12.7679 6 13 6Z'
                    fill='#FF0000'
                />
            </svg>
            <button className={styles.loginBtn}>Далее</button>
        </form>
    </div>
</div>
    </div>
  )
}

export default RegisterVerification