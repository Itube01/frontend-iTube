'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Videos from './components/Videos';
import CommentList from './components/CommentList';
import styles from './page.module.css';

export default function App() {
  const videoId = 'AED6T5KjU-g';

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.gridContainer}>
        <div className={styles.videoSection}>
          <VideoSection videoId={videoId}/>
        </div>
        <div className={styles.videos}>
          <Videos />
        </div>
        <div className={styles.commentsSection}>
          <CommentList />
        </div>
      </div>
    </div>
  );
}



