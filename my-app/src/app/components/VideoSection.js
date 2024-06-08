'use client'
import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoDetails from './VideoDetails';
import styles from "../styles/VideoSection.module.css";

export default function VideoSection({ videoId, title, description }) {
  return (
    <div className={styles.videoSection}>
      <VideoPlayer videoId={videoId} />
      <VideoDetails title={title} description={description} />
    </div>
  );
}