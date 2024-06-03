// components/Profile.js

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.menuItem}>Início</div>
        <div className={styles.menuItem}>Você</div>
        <div className={styles.subMenu}>
          <div className={styles.subMenuItem}>Canal</div>
          <div className={styles.subMenuItem}>Histórico</div>
          <div className={styles.subMenuItem}>Meus Vídeos</div>
        </div>
        <div className={styles.menuItem}>Inscrições</div>
        <div className={styles.subMenu}>
          <div className={styles.subMenuItem}>Canal</div>
          <div className={styles.subMenuItem}>Canal</div>
          <div className={styles.subMenuItem}>Canal</div>
          <div className={styles.subMenuItem}>Canal</div>
        </div>
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <input className={styles.searchBar} type="text" placeholder="Pesquisar" />
        <div className={styles.buttons}>
          <button className={styles.uploadButton}>Upload</button>
          <button className={styles.profileButton}>Perfil</button>
        </div>
        </header>
        <section className={styles.thumbnailSection}>
          <div className={styles.thumbnail}> </div>
        </section> 
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
            </div>
            <div className={styles.profileInfo}>
              <h1>Luan Gameplays</h1>
              <p>169 mil inscritos - 322 vídeos</p>
              <button className={styles.subscribeButton}>Inscrito</button>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
