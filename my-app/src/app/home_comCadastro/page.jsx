import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.css';
import logo from '/public/Image/logo.svg'
import historical from '/public/Image/historical.png'
import home from '/public/Image/home.png'
import playbtn from '/public/Image/play-button.png'
import user from '/public/Image/user.png'
import video from '/public/Image/daniel/video.jpg'
import video1 from '/public/Image/daniel/video10.jpg'
import video2 from '/public/Image/daniel/video12.jpg'
import video3 from '/public/Image/daniel/video13.jpg'
import video4 from '/public/Image/daniel/video14.jpg'
import video5 from '/public/Image/daniel/video15.jpg'
import video6 from '/public/Image/daniel/video16.jpg'
import video7 from '/public/Image/daniel/video17.jpg'
import video8 from '/public/Image/daniel/video18.jpg'
import filipi from '/public/Image/filipe.jpg'
import alan from '/public/Image/live_alan.jpg'
import girl from '/public/Image/lofi.jpg'
import gamerj from '/public/Image/davyjones.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iTube</title>
        <link rel="icon" href="./public/public/Image/daniel/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src={logo} alt="Logo" className={styles.logo} width={100} height={50} />
        </div>
        <div className={styles.header}>
          <input type="text" className={styles.searchBar} placeholder="Pesquisar" />
          <button className={styles.registerButton}>Upload</button>
          <button className={styles.registerButton}>Perfil</button>
        </div>
      </header>
      <div className={styles.centerAll}>
        <aside className={styles.sidebar}>
          {/* <div className={styles.logoWrapper}>
          <Image src="/public/Image/daniel/itubelogo.svg" alt="YouTube Logo" width={100} height={50} />
        </div> */}
          <button className={styles.sidebarItem}>
            <Image src={home} alt="Início" width={24} height={24} />
            <span>Início</span>
          </button>

          <span className={styles.sidebarItemb}>Você</span>

          <button className={styles.sidebarItem}>
            <Image src={user} alt="Você" width={24} height={24} />
            <span>Canal</span>
          </button>
          <button className={styles.sidebarItem}>
            <Image src={historical} alt="Histórico" width={24} height={24} />
            <span>Histórico</span>
          </button>
          <button className={styles.sidebarItem}>
            <Image src={playbtn} alt="Meus Vídeos" width={24} height={24} />
            <span>Meus Vídeos</span>
          </button>
          <span className={styles.sidebarItemb}>Inscrições</span>
          <div className={styles.subMenu}>
          <div className={styles.sidebarItemc}> <Link href={'#'}> <Image src={filipi}className={styles.filipi} alt="header_user" width={40} height={40}  /></Link> Filipe Deschamps </div>
          <div className={styles.sidebarItemc}> <Link href={'#'}> <Image src={alan}className={styles.alan} alt="header_user" width={40} height={40}  /> </Link> Lives do alanzoka </div>
          <div className={styles.sidebarItemc}> <Link href={'#'}> <Image src={gamerj}className={styles.gamerj} alt="header_user" width={40} height={40}  /> </Link> Gameplayrj</div>
          <div className={styles.sidebarItemc}> <Link href={'#'}> <Image src={girl}className={styles.girl} alt="header_user" width={40} height={40}  /> </Link> Lofi Girl</div>
        </div>
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.videoGrid}>
            {videoData.map((video, index) => (
              <div className={styles.videoCard} key={index}>
                <a className={styles.removerSub} href="./assistir_video_comCadastro">
                <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
                    <div className={styles.videoInfo}>
                      <p className={styles.videoTitle}>{video.title}</p>
                      <p className={styles.videoChannel}>{video.channel}</p>
                      <p className={styles.videoViews}>{video.views}</p>
                    </div>
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
      {/* <nav className={styles.navigation}>
        <button className={styles.navItem}>Alta</button>
        <button className={styles.navItem}>Tudo</button>
        <button className={styles.navItem}>Música</button>
        <button className={styles.navItem}>Jogos</button>
        <button className={styles.navItem}>Tecnologia</button>
        <button className={styles.navItem}>Saúde</button>
      </nav> */}
    </div>
  
  );
}

const videoData = [
  {
    thumbnail: video,
    title: 'Desenhos online gratuitos...',
    channel: 'Online',
    views: 'Patrocinado'
  },
  {
    thumbnail: video1,
    title: 'Pantera Rosa 2022...',
    channel: 'Pantera Rosa',
    views: '69 mi de visualizações • há 1 ano'
  },
  {
    thumbnail: video2,
    title: 'Scoob Doo e o monstro ...',
    channel: 'Desenhos Online',
    views: '756 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: video3,
    title: 'Padrinhos Mágicos...',
    channel: 'Padrinhos em Português',
    views: '312 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: video4,
    title: 'Tv Globinho...',
    channel: 'Tv kids',
    views: 'Ao Vivo'
  },
  {
    thumbnail: video5,
    title: 'Filme online Gratis ...',
    channel: 'Filmes Online',
    views: '200 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: video6,
    title: 'Pica Pau e suas Aventuras...',
    channel: 'Desenhos...',
    views: '250 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: video7,
    title: 'Desenhos online gratuitos...',
    channel: 'Desenhos...',
    views: '250 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: video8,
    title: 'Tom e Jerry e os ratos...',
    channel: 'Tom e Jerry',
    views: '1.2M views'
  },
];