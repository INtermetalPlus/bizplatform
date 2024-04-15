import React from 'react';
import Logo from '@/shared/logo/logo';
import Comment from '@/shared/comment/comment';
import styles from './CommentBlock.module.scss';
interface CommentBlockProps {
    logoSrc: string;
    companyName: string;
    companyDescription: string;
    commentText: string;
  }
  
  export const CommentBlock: React.FC<CommentBlockProps> = ({ logoSrc, companyName, companyDescription, commentText }) => {
    return (
      <div className={styles.background}>
        <Logo src={logoSrc} name={companyName} description={companyDescription} />
        <Comment commentText={commentText} />
      </div>
    );
  };
