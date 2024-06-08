import React from 'react';
import Comment from './Coment';
import styles from '../styles/CommentList.module.css';

export default function CommentList() {
  return (
    <div className={styles.commentList}>
      <h2>3 comentários</h2>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}