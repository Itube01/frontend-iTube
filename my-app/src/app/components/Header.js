import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { FaBars, FaTimes, FaHome, FaHistory } from 'react-icons/fa';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BiSolidVideos } from 'react-icons/bi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          <FaBars />
        </button>
        <a href="./home_semCadastro" className={styles.removersub}>
          <img className={styles.logo} src="/Image/logo2.svg" alt="Logo Itube" />
        </a>
      </div>
      <input type="text" placeholder="Pesquisar" className={styles.searchBar} />
      <div className={styles.rightSection}>
        <a href="#upload" className={styles.removersub}>
          <div className={styles.uploadButton}>Upload</div>
        </a>
        <a href="#perfil" className={styles.removersub}>
          <div className={styles.profileButton}>Perfil</div>
        </a>
      </div>
      <nav className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          <FaTimes />
        </button>
        <a href="#Início" className={styles.removersub}>
          <FaHome className={styles.menuIcon} /> Início
        </a>
        <a href="#Canal" className={styles.removersub}>
          <IoPersonCircleOutline className={styles.menuIcon} /> Canal
        </a>
        <a href="#Historico" className={styles.removersub}>
          <FaHistory className={styles.menuIcon} /> Histórico
        </a>
        <a href="#Meus-Vídeos" className={styles.removersub}>
          <BiSolidVideos className={styles.menuIcon} /> Meus Vídeos
        </a>
      </nav>
    </header>
  );
}