// pages/index.js
import styles from '../styles/home.module.css';
import React from 'react';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.hero}>
      <h1>Welcome to MyWebsite</h1>
      <p className={styles.para}>Your solution for awesome services.</p>
      <Link className={styles.button}   href="/services">
      Get Started
    </Link>
        </div>
  );
}
