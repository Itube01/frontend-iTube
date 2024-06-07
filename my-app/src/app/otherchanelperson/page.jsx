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
import Link from 'next/link'

const Profile = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.buttonhome}>
        <Image src={logo}className={styles.logo} alt="header_logo" width={64} height={46}  />
        <div className={styles.menuItem}> <Image src={home}className={styles.home} alt="header_home" width={20} height={30}  /> Início</div>
        </div>
        

        <div className={styles.menuItem}><strong className={styles.You}>Você</strong></div>
        <div className={styles.subMenu}>
          <div className={styles.menuItem}>
          <div><Image src={user}className={styles.user} alt="header_user" width={20} height={30}  /> </div>
          <div className={styles.subMenuItem}>Canal</div>
          </div>
        <div className={styles.menuItem}>
        <div><Image src={histor}className={styles.histor} alt="header_histor" width={20} height={30}  /></div>
          <div className={styles.subMenuItem}>Histórico</div>
        </div>
          <div className={styles.menuItem}>
          <div><Image src={play}className={styles.play} alt="header_play" width={20} height={30}  /></div>
          <div className={styles.subMenuItem}>Meus Vídeos</div>
          </div>
         
        </div>
        <div className={styles.menuItem}><strong className={styles.You}>Inscrições</strong></div>
        <div className={styles.subMenu}>
          <div className={styles.subMenuItem}> <Link href={'#'}> <Image src={filipi}className={styles.filipi} alt="header_user" width={40} height={40}  /></Link> Filipe Deschamps </div>
          <div className={styles.subMenuItem}> <Link href={'#'}> <Image src={alan}className={styles.alan} alt="header_user" width={40} height={40}  /> </Link> Lives do alanzoka </div>
          <div className={styles.subMenuItem}> <Link href={'#'}> <Image src={gamerj}className={styles.gamerj} alt="header_user" width={40} height={40}  /> </Link> Gameplayrj</div>
          <div className={styles.subMenuItem}> <Link href={'#'}> <Image src={girl}className={styles.girl} alt="header_user" width={40} height={40}  /> </Link> Lofi Girl</div>
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
              <Link href={'#'}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>ASPAS É O REI DA OUTLAW! | 50-15 ft Naxy</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>MORTAL KOMBAT 1 - Homelander (Capitão Pátria)</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>JOGANDO FORTNITE PELA PRIMEIRA VEZ NA VIDA!</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>MORTAL KOMBAT 1 - Homelander (Capitão Pátria)</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>JOGANDO FORTNITE PELA PRIMEIRA VEZ NA VIDA!</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>ASPAS É O REI DA OUTLAW! | 50-15 ft Naxy</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
          <div className={styles.videos}>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
              <Link href={'#'}>
                  <Image src={fort} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>JOGANDO FORTNITE PELA PRIMEIRA VEZ NA VIDA!</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Link href={'#'}>
                  <Image src={valorant} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>ASPAS É O REI DA OUTLAW! | 50-15 ft Naxy</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
            <div className={styles.videoCard}>
              <div className={styles.clickvideo}>
                  <Link href={'#'}>
                    <Image src={mortal} className={styles.val} alt="Video Image" width={325} height={183} />
                  </Link>
              </div>
              <h2>MORTAL KOMBAT 1 - Homelander (Capitão Pátria)</h2>
              <p>1 mil visualizações - há 1 mês</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;