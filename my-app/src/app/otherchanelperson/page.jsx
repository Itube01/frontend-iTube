// components/Profile.js

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import valorant from './public/image/valorant.png';
import mortal from './public/image/MK.jpg';
import fort from './public/image/fortnite.jpg';
import logo from './public/image/logo.svg';
import home from './public/image/Home.svg';
import user from './public/image/User.svg';
import play from './public/image/player.svg';
import histor from './public/image/History.svg';
import filipi from './public/image/filipe.jpg'
import alan from './public/image/live_alan.jpg'
import girl from './public/image/lofi.jpg'
import gamerj from './public/image/davyjones.jpg'

const Profile = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <Image src={logo}className={styles.logo} alt="header_logo" width={64} height={46}  />
        <div className={styles.menuItem}> <Image src={home}className={styles.home} alt="header_home" width={20} height={30}  /> Início</div>
        <div className={styles.menuItem}>Você</div>
        <div className={styles.subMenu}>
          <div className={styles.subMenuItem}><Image src={user}className={styles.user} alt="header_user" width={20} height={30}  />Canal</div>
          <div className={styles.subMenuItem}><Image src={histor}className={styles.histor} alt="header_histor" width={20} height={30}  />Histórico</div>
          <div className={styles.subMenuItem}><Image src={play}className={styles.play} alt="header_play" width={20} height={30}  />Meus Vídeos</div>
        </div>
        <div className={styles.menuItem}>Inscrições</div>
        <div className={styles.subMenu}>
          <div className={styles.subMenuItem}><Image src={filipi}className={styles.filipi} alt="header_user" width={40} height={40}  />Filipe Deschamps </div>
          <div className={styles.subMenuItem}><Image src={alan}className={styles.alan} alt="header_user" width={40} height={40}  />Lives do alanzoka </div>
          <div className={styles.subMenuItem}><Image src={gamerj}className={styles.gamerj} alt="header_user" width={40} height={40}  />Gameplayrj</div>
          <div className={styles.subMenuItem}><Image src={girl}className={styles.girl} alt="header_user" width={40} height={40}  />Lofi Girl</div>
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
              <h1>Mr. Poladoful</h1>
              <p>26 inscritos - 9 vídeos</p>
              <button className={styles.subscribeButton}>Inscrito</button>
            </div>
          </div>
          <h2 className={styles.aaa}>Videos</h2>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
              <h2>Como criar um chat em tempo real com HTML, CSS e...</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
              </div>
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
