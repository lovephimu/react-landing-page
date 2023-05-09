import './App.css';
import React from 'react';
import styles from './App.module.scss';
import { ReactComponent as logoOne } from './logodysnix.svg';
import { ReactComponent as logoTwo } from './logorpc.svg';

export default function App() {
  return (
    <>
      <header>
        <div>
          <logoOne />
          <logoTwo />
          <span>Web3 API</span>
          <span>Enterprise</span>
          <span>Pricing</span>
          <span>Docs</span>
          <span>Blog</span>
          <span>About Us</span>
          <span>Log in</span>
          <span>Try it for free</span>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
