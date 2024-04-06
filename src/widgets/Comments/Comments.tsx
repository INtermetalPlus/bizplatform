import React from 'react';
import styles from './Comments.module.scss';
import { CommentBlock } from '../CommentBlock';

const reviews = [
  {
    logoSrc: 'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
    companyName: 'Название компании 1',
    companyDescription: 'Описание компании 1',
    commentText: 'Текст комментария 1',
  },
  {
    logoSrc: 'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
    companyName: 'Название компании 2',
    companyDescription: 'Описание компании 2',
    commentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores saepe sunt placeat. Molestias magni voluptate, eveniet dolor, expedita modi',
  },
  {
    logoSrc: 'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
    companyName: 'Название компании 2',
    companyDescription: 'Описание компании 2',
    commentText: 'Текст комментария 2',
  },
  {
    logoSrc: 'https://investvlg.ru/800/600/http/papik.pro/uploads/posts/2021-11/1636091279_21-papik-pro-p-makdonalds-logotip-foto-22.png',
    companyName: 'Название компании 2',
    companyDescription: 'Описание компании 2',
    commentText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores saepe sunt placeat. Molestias magni voluptate, eveniet dolor, expedita modi, sequi inventore rem assumenda porro odit tempora? Quo numquam dolore amet, quos totam asperiores molestiae atque repudiandae voluptatum corporis laborum dignissimos aliquam quaerat unde incidunt consequatur eaque ullam quam rerum', 
  },
  // Добавьте больше отзывов здесь...
];

export const Comments = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerComment}>
        <h2>Отзывы пользователей</h2>
        <label>Все отзывы</label>
      </div>
      <div className={styles.comments}>
        {reviews.map((review, index) => (
          <CommentBlock
            key={index}
            logoSrc={review.logoSrc}
            companyName={review.companyName}
            companyDescription={review.companyDescription}
            commentText={review.commentText}
          />
        ))}
      </div>
    </div>
  );
};
