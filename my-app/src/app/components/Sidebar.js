import React from 'react';
import styles from '../styles/Sidebar.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <FaTimes className={styles.closeIcon} onClick={toggleSidebar} />
      </div>
      <ul className={styles.menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#trending">Trending</a></li>
        <li><a href="#subscriptions">Subscriptions</a></li>
      </ul>
    </div>
  );
}