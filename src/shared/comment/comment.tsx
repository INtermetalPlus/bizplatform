import React from "react";
import styles from "./comment.module.scss";

interface CommentProps {
  commentText: string;
}

const Comment: React.FC<CommentProps> = ({ commentText }) => {
  return (
    <div className={styles.main}>
      <div className={styles.union}>
        <svg
          width="82"
          height="77"
          viewBox="0 0 82 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.9674 1.97232C26.1068 0.00435732 28.8183 -0.736148 29.9303 0.894615C36.929 11.158 52.8967 33.4631 67.497 45.8808C71.3674 49.1725 76.8802 53.2482 80.5019 55.8638C81.915 56.8845 81.4626 59.1155 79.7606 59.4888L2.46706 76.444C1.27784 76.7048 0.140915 75.8581 0.0922949 74.6418C-0.227256 66.6473 -0.370836 40.5209 11.4031 40.5092C21.9736 40.4986 25.0839 14.4517 25.9674 1.97232Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
      <div className={styles.bgc}>
        <p className={styles.text}>{commentText}</p>
      </div>
    </div>
  );
};

export default Comment;
