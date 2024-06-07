import React from 'react';
import styles from '../styles/VideoDetails.module.css';
import { BiSolidDislike,BiSolidLike } from "react-icons/bi";

export default function VideoDetails() {
  return (
    <div className={styles.videoDetails}>
      <h1>Como criar um chat em tempo real com HTML, CSS e JavaScript e colocar online de graça!</h1>
      <div className={styles.channelInfo}>
        <a  href='#Canal'>
        <img src="/images/Man.png" alt="Channel Avatar" className={styles.channelAvatar} />
        </a>
        <a  href='#Canal' className={styles.removersubtitulo} >
        <div className={styles.channelName}>Manual do Dev</div>
        </a>
        <button className={styles.subscribeButton}>Inscrever-se</button>
        <div className={styles.actionbutton}>
        <button className={styles.buttonLike}> <BiSolidLike size={25}/> </button>
        <button className={styles.buttonDislike}> <BiSolidDislike size={25}/> </button>
        </div>
         
      </div>
      <div className={styles.videoStats}>
        <span>6.532 visualizações</span>
        <span>Há 3 horas</span>
        <span>#javascript #html #css #websocket</span>
      </div>
      <div className={styles.videoDescription}>
        <p>Nesse vídeo, vamos aprender a criar um chat em tempo real usando basicamente JavaScript puro e colocá-lo online de graça! Sim, 
          você vai poder conversar com seus amigos usando o seu próprio chat online!<br/>
          Repositório do projeto:
          https://github.com/manualdodev/chat<br/>
          Compartilhe o seu projeto e marca lá no LinkedIn do Manual do Dev: manualdodev<br/> 
          Resumo do que você vai aprender com esse vídeo:<br/>
          Nesse vídeo, vamos criar um backend simples usando Node.js e vamos desenvolver um frontend usando HTML, CSS e JavaScript puro. Em seguida, vamos conectar os dois. 
          Vamos criar componentes estilizados e bem bonitos usando CSS puro e manipulá-los de forma dinâmica através do nosso JavaScript!<br/>
          No final, vamos fazer o deploy do nosso backend e do nosso frontend de graça!<br/>
          Etapas do vídeo:<br/>
          00:00:00 - Introdução e demonstração do projeto<br/>
          00:02:11 - Estrutura, ferramentas e pré-requisitos<br/>
          00:04:24 - Backend<br/>
          00:17:20 - Frontend: HTML e CSS<br/>
          00:49:19 - Frontend: JavaScript<br/>
          01:29:58 - Deploy</p>
      </div>
    </div>
  );
}
