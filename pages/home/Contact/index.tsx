import React from 'react';
import styles from '../style.module.css';

export default function index() {
  return (
    <div className={styles.sectionContact}>
      <div className={styles.contact}>
        <h4>Contact</h4>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactItems}>
          <h2>Address</h2>
          <h3>JL.xxx.no.xx</h3>
        </div>
        <div className={styles.contactItems}>
          <h2>Telp CS</h2>
          <h3>021.xxxx.xxxx</h3>
        </div>
        <div className={styles.contactItems}>
          <h2>Email</h2>
          <h3>xxx@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
