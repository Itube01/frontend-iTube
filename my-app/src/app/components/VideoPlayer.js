'use client'
import React from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/VideoPlayer.module.css';

export default function VideoPlayer({ videoId }) {
  const opts = {
    
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay:0,

    },
  };
  return (
    <div className={styles.videoContainer}>
      <YouTube videoId={videoId} opts={opts} className={styles.video} />
    </div>
  );
}


