import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iTube</title>
        <link rel="icon" href="./public/image/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src="/Image/logo.svg" alt="Logo" className={styles.logo} width={100} height={50} />
        </div>
        <div className={styles.header}>
          <input type="text" className={styles.searchBar} placeholder="Pesquisar" />
          <button className={styles.registerButton}><a href="./useregister">Cadastrar</a></button>
        </div>
      </header>
      <div className={styles.centerAll}>
        <aside className={styles.sidebar}>
          {/* <div className={styles.logoWrapper}>
          <Image src="/Image/itubelogo.svg" alt="YouTube Logo" width={100} height={50} />
        </div> */}
          <button className={styles.sidebarItem}>
            <Image src="/Image/home.png" alt="Início" width={24} height={24} />
            <span><a href="">Início</a></span>
          </button>
          <button className={styles.sidebarItem}>
            <Image src="/Image/user.png" alt="Você" width={24} height={24} />
            <span>Você</span>
          </button>
          <button className={styles.sidebarItem}>
            <Image src="/Image/historical.png" alt="Histórico" width={24} height={24} />
            <span>Histórico</span>
          </button>
          <button className={styles.sidebarItem}>
            <Image src="/Image/play-button-arrowhead.png" alt="Meus Vídeos" width={24} height={24} />
            <span>Meus Vídeos</span>
          </button>
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.videoGrid}>
            {videoData.map((video, index) => (
              <div className={styles.videoCard} key={index}>
                <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
                <div className={styles.videoInfo}>
                  <p className={styles.videoTitle}>{video.title}</p>
                  <p className={styles.videoChannel}>{video.channel}</p>
                  <p className={styles.videoViews}>{video.views}</p>
                </div>
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
    thumbnail: '/Image/video.jpg',
    title: 'Desenhos online gratuitos...',
    channel: 'Online',
    views: 'Patrocinado'
  },
  {
    thumbnail: '/Image/video1.jpg',
    title: 'Pantera Rosa 2022...',
    channel: 'Pantera Rosa',
    views: '69 mi de visualizações • há 1 ano'
  },
  {
    thumbnail: '/Image/video2.jpg',
    title: 'Scoob Doo e o monstro ...',
    channel: 'Desenhos Online',
    views: '756 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/Image/video3.jpg',
    title: 'Padrinhos Mágicos...',
    channel: 'Padrinhos em Português',
    views: '312 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/Image/video4.jpg',
    title: 'Tv Globinho...',
    channel: 'Tv kids',
    views: 'Ao Vivo'
  },
  {
    thumbnail: '/Image/video5.jpg',
    title: 'Filme online Gratis ...',
    channel: 'Filmes Online',
    views: '200 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/Image/video6.jpg',
    title: 'Pica Pau e suas Aventuras...',
    channel: 'Desenhos...',
    views: '250 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/Image/video7.jpg',
    title: 'Desenhos online gratuitos...',
    channel: 'Desenhos...',
    views: '250 mil visualizações • há 2 semanas'
  },
  {
    thumbnail: '/Image/video8.jpg',
    title: 'Tom e Jerry e os ratos...',
    channel: 'Tom e Jerry',
    views: '1.2M views'
  },
];