import './App.css';
import React from 'react';
import styles from './App.module.scss';
import { ReactComponent as LogoTwo } from './logodysnix.svg';
import { ReactComponent as LogoOne } from './logorpc.svg';

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
      <section></section>
      <footer></footer>
    </>
  );
}
