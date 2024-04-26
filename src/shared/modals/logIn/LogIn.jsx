import React from 'react'
import styles from './style.module.css'

const Login = () => {
	return (
		<div className={styles.newPasswordModalBlock}>
			<div className={styles.container}>
				<div className={styles.changePassword}>
					<h2>Вход</h2>
					<svg
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
				</div>
				<div className={styles.form}>
					<input type='text' placeholder='Email' />
					<svg
						className={styles.eyeCloseIcon}
						xmlns='http://www.w3.org/2000/svg'
						width='26'
						height='24'
						viewBox='0 0 26 24'
						fill='none'
					>
						<path
							d='M11.5334 3.94104C12.0076 3.87094 12.4967 3.83333 13.0005 3.83333C18.9563 3.83333 22.8645 9.08898 24.1775 11.168C24.3364 11.4196 24.4158 11.5454 24.4603 11.7395C24.4937 11.8852 24.4937 12.1151 24.4603 12.2608C24.4158 12.4549 24.3358 12.5815 24.1757 12.8348C23.8259 13.3885 23.2925 14.1666 22.5859 15.0105M6.84504 5.83421C4.32262 7.54532 2.61019 9.92261 1.82462 11.1662C1.665 11.4188 1.58519 11.5452 1.5407 11.7392C1.50728 11.885 1.50727 12.1148 1.54067 12.2606C1.58513 12.4546 1.66459 12.5804 1.82349 12.832C3.13646 14.911 7.04465 20.1667 13.0005 20.1667C15.402 20.1667 17.4705 19.3122 19.1703 18.156M2.50048 1.5L23.5005 22.5M10.5256 9.52513C9.89224 10.1585 9.50048 11.0335 9.50048 12C9.50048 13.933 11.0675 15.5 13.0005 15.5C13.967 15.5 14.842 15.1082 15.4754 14.4749'
							stroke='#565656'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<svg
						className={styles.eyeOpenIcon}
						xmlns='http://www.w3.org/2000/svg'
						width='26'
						height='20'
						viewBox='0 0 26 20'
						fill='none'
					>
						<path
							d='M1.82348 10.8322C1.66459 10.5806 1.58515 10.4548 1.54068 10.2608C1.50727 10.1151 1.50727 9.88525 1.54068 9.73951C1.58515 9.54549 1.66459 9.4197 1.82348 9.16812C3.13645 7.08914 7.04463 1.8335 13.0005 1.8335C18.9563 1.8335 22.8645 7.08914 24.1775 9.16812C24.3364 9.4197 24.4158 9.54549 24.4603 9.73951C24.4937 9.88525 24.4937 10.1151 24.4603 10.2608C24.4158 10.4548 24.3364 10.5806 24.1775 10.8322C22.8645 12.9112 18.9563 18.1668 13.0005 18.1668C7.04463 18.1668 3.13645 12.9112 1.82348 10.8322Z'
							stroke='#565656'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M13.0005 13.5002C14.9335 13.5002 16.5005 11.9332 16.5005 10.0002C16.5005 8.06717 14.9335 6.50016 13.0005 6.50016C11.0675 6.50016 9.50047 8.06717 9.50047 10.0002C9.50047 11.9332 11.0675 13.5002 13.0005 13.5002Z'
							stroke='#565656'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<input
						className={styles.passwordNotTrue}
						type='text'
						placeholder='Пароль'
					/>
					<a href=''>Забыли пароль?</a>
				</div>
				<button className={styles.loginBtn}>Сохранить</button>
				<p>
					Ещё нет аккаунта? <a href=''>Зарегистрироваться</a>
				</p>
			</div>
		</div>
	)
}

export default Login
