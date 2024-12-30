import React from 'react';
import styles from './footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.claudia}>Claudia de Utrera - 2024</p>
      <p className={styles.credits}>
        Desarrollado por{' '}
        <a
          href="https://www.jorgecn.dev/"
          target="_blank"
        >
          JorgeCN
        </a>
      </p>
    </footer>
  );
}
