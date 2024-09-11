'use client'
import React, { useState } from 'react'
import styles from './style.module.scss'

const Help = () => {
	const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index, event) => {
  const button = event.currentTarget;
  const parent = button.parentElement;
  const prevIndex = activeIndex; 

  if (prevIndex === index) {
    setActiveIndex(null);
    parent.classList.remove(styles.activeBlock);
    button.classList.remove(styles.activeBtn);
  } else {
    setActiveIndex(index);

    if (prevIndex !== null) {
      const prevButton = document.querySelector(
        `[data-index="${prevIndex}"] button`
      );
      const prevParent = prevButton.parentElement;
      prevParent.classList.remove(styles.activeBlock);
      prevButton.classList.remove(styles.activeBtn);
    }

    parent.classList.add(styles.activeBlock);
    button.classList.add(styles.activeBtn);
  }
};

	const elements = Array(9).fill(null)

	return (
		<div className={styles.Help}>
			<h1>Помощь</h1>
			<div className={styles.variationsBlock}>
				{elements.map((_, index) => (
						<div data-index={index} className={styles.variation}>
							<p>Как отправить сообщение поставщику?</p>
							<button onClick={event => handleClick(index, event)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='34'
									height='34'
									viewBox='0 0 34 34'
									fill='none'
								>
									<path
										d='M8.5 12.75L17 21.25L25.5 12.75'
										stroke='#3971FF'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</button>
							{activeIndex === index && (
								<div className={styles.text}>
									<span>
										Отправление сообщения поставщику через модальное окно, где
										находится модальное окно?
										<ol className={styles.instruction}>
											<li>Зайдите в страницу со списком товаров и услуг</li>
											<li>
												Выберите любой товар и нажмите на кнопку “Написать
												поставщику”
											</li>
											<li>
												В открывшемся модальном окне напишите интересующий вас
												вопрос
											</li>
										</ol>
									</span>
								</div>
							)}
						</div>
				))}
			</div>
		</div>
	)
}

export default Help
