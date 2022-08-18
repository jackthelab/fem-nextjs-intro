import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import tempLogo from '../public/images/tempLogo.png';
import Image from 'next/image';

const Home: NextPage = () => {

  console.log(tempLogo);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jacob H. Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1>Portfolio Site Coming...</h1>
        <Image src={tempLogo} alt='temporary logo' width={32} height={32} />

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
