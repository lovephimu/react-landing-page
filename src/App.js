import './App.css';
import React from 'react';
import styles from './App.module.scss';
import { ReactComponent as LogoTwo } from './logodysnix.svg';
import { ReactComponent as LogoOne } from './logorpc.svg';
import { ReactComponent as PicOne } from './pic1.svg';

export default function App() {
  return (
    <>
      <header>
        <div className={styles.flexHeaderMenu}>
          <LogoOne className={styles.flexImage} />
          <LogoTwo className={styles.flexImage} />
          <a href="/#" className={styles.flexHeaderItems}>
            Web3 API
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Enterprise
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Pricing
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Docs
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            Blog
          </a>
          <a href="/#" className={styles.flexHeaderItems}>
            About Us
          </a>
          <a href="/#" className={`${styles.flexHeaderItems} ${styles.logIn}`}>
            Log in
          </a>
          <a
            href="/#"
            className={`${styles.flexHeaderItems} ${styles.linkButton}`}
          >
            Try it for free
          </a>
        </div>
      </header>
      <section className={styles.flexContainer}>
        <div className={styles.mottoCard}>
          <p className={styles.mottoItem}>
            Dive into Web3 with our fastest geo-distributed high-available
            Blockchain API
          </p>
          <PicOne />
        </div>
      </section>
      <section className={styles.flexContainer}>
        <div>Container 1</div>
        <div>Container 2</div>
        <div>Container 3</div>
      </section>
      <section className={`${styles.flexContainer} ${styles.white}`}>
        <h1>Benefits of RPC Fast API</h1>
      </section>
      <section className={`${styles.flexContainer} ${styles.blue}`}>
        <h1>We're trusted by</h1>
      </section>
      <section className={`${styles.flexContainer} ${styles.darkBlue}`}>
        <h1>Select the blockchain you need</h1>
      </section>
      <section className={`${styles.flexContainer}`}>
        <h1>A bespoke solution created by Dysnix</h1>
      </section>
      <section className={`${styles.flexContainer} ${styles.white}`}>
        <h1>Frequently Asked Questions: Basic Knowledge to Remind</h1>
      </section>
      <footer className={`${styles.flexContainer} ${styles.dark}`}>
        <LogoOne className={styles.flexImage} />
        <LogoTwo className={styles.flexImage} />
      </footer>
    </>
  );
}
