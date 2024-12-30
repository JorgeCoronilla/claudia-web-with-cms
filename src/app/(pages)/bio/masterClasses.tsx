import React from 'react';
import styles from './masterClasses.module.css';
interface MasterClassesProps {
  setter: (value: boolean) => void;
  show: boolean;
}

export default function MasterClasses({ setter, show }: MasterClassesProps) {
  return (
    <section className={styles.masterClasses}>
      <button onClick={() => setter(false)}>Bio</button>
      <div className={styles.content}>
        <h2>Master clases</h2>
        <div className={styles.picContainer}>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
          <div className={styles.pic}></div>
        </div>
      </div>
    </section>
  );
}
