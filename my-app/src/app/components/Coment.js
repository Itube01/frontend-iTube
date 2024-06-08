import React from 'react';
import styles from '../styles/Comment.module.css';
import { BiSolidLike,BiSolidDislike } from "react-icons/bi";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <img src="/Image/Man.png" alt="Avatar Comentario" className={styles.commenterAvatar} />
      <div className={styles.commentBody}>
        <div className={styles.commenterName}>Jorge</div>
        <div className={styles.commentTime}>há 3 hora</div>
        <div className={styles.commentText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt dictum arcu...
        </div>
        <div className={styles.commentActions}>
          <button className={styles.likeButton}><BiSolidLike /> </button>
          <button className={styles.likeButton}><BiSolidDislike /> </button>
          <button className={styles.replyButton}>Responder</button>
        </div>
      </div>
    </div>
  );
}