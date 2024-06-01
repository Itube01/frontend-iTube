import React from 'react';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      
      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb1.jpg"
        title="Como criar um chat em tempo real..."
        channel="Rocketseat"
        views="199 mil visualizações"
        time="há 10 horas"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb2.jpg"
        title="Videos de passaros"
        channel="Vida de passaro"
        views="50 mil visualizações"
        time="há 2 dias"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb3.jpg"
        title="React Full Course for free ⚛️ (2024)"
        channel="Bros code"
        views="75 mil visualizações"
        time="há 5 dias"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb1.jpg"
        title="Como criar um chat em tempo real..."
        channel="Rocketseat"
        views="199 mil visualizações"
        time="há 10 horas"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb2.jpg"
        title="Videos de passaros"
        channel="Vida de passaro"
        views="50 mil visualizações"
        time="há 2 dias"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb3.jpg"
        title="React Full Course for free ⚛️ (2024)"
        channel="Bros code"
        views="75 mil visualizações"
        time="há 5 dias"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb1.jpg"
        title="Como criar um chat em tempo real..."
        channel="Rocketseat"
        views="199 mil visualizações"
        time="há 10 horas"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb2.jpg"
        title="Videos de passaros"
        channel="Vida de passaro"
        views="50 mil visualizações"
        time="há 2 dias"
      />
      </a>

      <a href='#video' className={styles.removersub}>
      <RelatedVideo
        thumbnail="/images/thumb3.jpg"
        title="React Full Course for free ⚛️ (2024)"
        channel="Bros code"
        views="75 mil visualizações"
        time="há 5 dias"
      />
      </a>

    </div>
  );
}

function RelatedVideo({ thumbnail, title, channel, views, time }) {
  return (
    <div className={styles.relatedVideo}>
      <div className={styles.thumbnailContainer}>
        <img src={thumbnail} alt="Thumbnail" className={styles.thumbnail} />
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.channel}>{channel}</div>
        <div className={styles.metadata}>
          <span>{views}</span> • <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
