'use client'
import React from 'react';
import YouTube from 'react-youtube';

export default function VideoPlayer({ videoId }) {
  const opts = {
    
    height: '700',
    width: '1200',
    playerVars: {
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}
