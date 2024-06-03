'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import CommentList from './components/CommentList';
import Videos from './components/Videos';
import styles from './page.module.css';
import VideoSection from './components/VideoSection';

export default function App() {
  const videoId = 'AED6T5KjU-g'; 

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.videoSection}>
        <VideoSection videoId={videoId} title={"Como criar um chat em tempo real com HTML, CSS e..."} />
        <CommentList />
        </div>
        <Videos/>
      </main>
    </div>
  );
}
