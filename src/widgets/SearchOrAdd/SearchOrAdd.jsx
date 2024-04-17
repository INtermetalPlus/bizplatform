import React from 'react'
import styles from './style.module.css'
import { Button } from '@/shared/ui/button'

const About = () => {

	

	return (
		<div className={styles.SearchOrAddBlock}>
			<div className={styles.container}>
				<div className={styles.add}>
					<h2>Найти или добавить свой товар</h2>
					<Button width='385px' text='Добавить товар' />
				</div>
				<div className={styles.search}>
					<button>
						Кыргызстан
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='13'
							viewBox='0 0 20 13'
							fill='none'
						>
							<path
								d='M0 2.525L1.775 0.75L10 8.975L18.225 0.75L20 2.525L10 12.525L0 2.525Z'
								fill='white'
							/>
						</svg>
					</button>
					<svg className={styles.searchIcon}						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='31'
						viewBox='0 0 30 31'
						fill='none'
					>
						<path
							d='M26.25 26.75L21.8751 22.375M25 14.875C25 20.743 20.243 25.5 14.375 25.5C8.50697 25.5 3.75 20.743 3.75 14.875C3.75 9.00697 8.50697 4.25 14.375 4.25C20.243 4.25 25 9.00697 25 14.875Z'
							stroke='#ADADAD'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>

					<input type='text' placeholder='Найти заказ' />
					<div className={styles.ordersAndProducts}>
						<button className={styles.active}>Заказы</button>
						<button>Товары</button>
					</div>
				</div>
				<div className={styles.category}>
					<div className={styles.card}>
						<div className={styles.icon}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none'>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									// fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Автотовары и автосервис</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Автотовары и автосервис</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Автотовары и автосервис</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Автотовары и автосервис</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none'>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none'>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none'>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none'>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								// viewBox='0 0 90 86'
								fill='none'
							>
								<path
									d='M0 0H90V83C90 84.6569 88.6569 86 87 86H3C1.34315 86 0 84.6569 0 83V0Z'
									fill='#3971FF'
								/>
								<path
									d='M31 45H37M25 37L29 39L31.5413 31.3761C32.0658 29.8025 32.3281 29.0157 32.8146 28.434C33.2442 27.9203 33.7958 27.5226 34.419 27.2776C35.1247 27 35.9541 27 37.6129 27H52.3871C54.0459 27 54.8753 27 55.581 27.2776C56.2042 27.5226 56.7558 27.9203 57.1854 28.434C57.6719 29.0157 57.9342 29.8025 58.4587 31.3761L61 39L65 37M53 45H59M34.6 39H55.4C58.7603 39 60.4405 39 61.7239 39.654C62.8529 40.2292 63.7708 41.1471 64.346 42.2761C65 43.5595 65 45.2397 65 48.6V54C65 54.9293 65 55.394 64.9231 55.7804C64.6075 57.3671 63.3671 58.6075 61.7804 58.9231C61.394 59 60.9293 59 60 59H59C56.7909 59 55 57.2091 55 55C55 54.4477 54.5523 54 54 54H36C35.4477 54 35 54.4477 35 55C35 57.2091 33.2091 59 31 59H30C29.0707 59 28.606 59 28.2196 58.9231C26.6329 58.6075 25.3925 57.3671 25.0769 55.7804C25 55.394 25 54.9293 25 54V48.6C25 45.2397 25 43.5595 25.654 42.2761C26.2292 41.1471 27.1471 40.2292 28.2761 39.654C29.5595 39 31.2397 39 34.6 39Z'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
						<p>Потребительские товары и спецмагазины</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
