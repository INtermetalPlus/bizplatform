import { Chats } from '@/pages/Chats'
import React from 'react'
import styles from './style.module.scss'

const About = () => {
  return (
		<div className={styles.aboutPage}>
			<div className={styles.about}>
				<h1>О платформе</h1>
				<p className={styles.p}>
					Мы создаем удобную и эффективную среду для того, чтобы ваш бизнес мог
					расширяться и процветать!
				</p>
				<span>
					Наши оптовая торговая площадка представляет собой виртуальные рынки,
					где производители, поставщики и оптовые покупатели могут встретиться и
					осуществить успешные торговые сделки. Мы создаем удобную и эффективную
					среду для того, чтобы ваш бизнес мог расширяться и процветать.
				</span>
				<div className={styles.whatWeCan}>
					<p>1. Широкий ассортимент товаров</p>
					<span>
						На наших площадках представлен огромный выбор товаров от крупных и
						надежных поставщиков со всего мира. От одежды и обуви до электроники
						и строительных материалов - у нас есть все, что нужно для вашего
						бизнеса.
					</span>
					<p>2. Надежные поставщики</p>
					<span>
						Мы тщательно отбираем поставщиков, чтобы гарантировать качество
						товаров и надежность сделок. Наши поставщики проходят строгую
						проверку, чтобы вы могли быть уверены в качестве продукции.
					</span>
					<p>3. Поддержка клиентов</p>
					<span>
						Наша команда поддержки всегда готова помочь вам с любыми вопросами
						или проблемами, связанными с использованием нашей платформы.
					</span>
				</div>
			</div>
			<div className={styles.howWorks}>
				<h1>Как работает платформа</h1>
				<div className={styles.examples}>
					<div className={styles.example}>
						<ul>
							1.
							<p>Регистрация</p>
						</ul>
						<span>
							Lorem ipsum dolor sit amet consectetur. Et faucibus dapibus ornare
							egestas. Arcu non consequat diam sapien. Nec viverra pellentesque
						</span>
					</div>
					<div className={styles.example}>
						<ul>
							2.
							<p>Размещение товара</p>
						</ul>
						<span>
							Lorem ipsum dolor sit amet consectetur. Et faucibus dapibus ornare
							egestas. Arcu non consequat diam sapien. Nec viverra pellentesque
						</span>
					</div>
					<div className={styles.example}>
						<ul>
							3.
							<p>Договор с клиентами</p>
						</ul>
						<span>
							Lorem ipsum dolor sit amet consectetur. Et faucibus dapibus ornare
							egestas. Arcu non consequat diam sapien. Nec viverra pellentesque
						</span>
					</div>
				</div>
			</div>
			<div className={styles.partners}>
				<h1>Партнеры</h1>
				<div className={styles.logos}>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
					<div className={styles.logo}></div>
				</div>
			</div>
		</div>
	)
}

export default About