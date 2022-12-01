import React from 'react';
import Link from 'next/link';
import CopyRight from '../../components/Login/CopyRight';
import ImageLogin from '../../components/Login/ImageLogin';
import Layout from '../../components/Layout';
import { MetaTitle } from '../../components/Utils';
import styles from '../login/style.module.css';
import Logo from '../../components/Login/Logo';

export default function index() {
  return (
    <Layout pageTitle={MetaTitle.REGISTER}>
      <div className={styles.container}>
        {/* HeaderLogin */}
        <Logo />

        {/* ContentLogin */}
        <div className={styles.content}>
          <div className={styles.form}>
            <p className={styles.formTitle}>Register</p>
            <form action="#" method="_post">
              <input placeholder="NAME" type="text" name="name" id="name" />
              <input
                placeholder="EMAIL ADDRESS"
                type="text"
                name="email"
                id="email"
              />
              <input
                placeholder="PHONE NUMBER"
                type="text"
                name="pnumber"
                id="pnumber"
              />
              <input
                placeholder="PASSWORD"
                type="password"
                name="password"
                id="password"
              />
              <button type="submit" className={styles.btnLogin}>
                <Link href="/home">Register Now</Link>
              </button>
            </form>
          </div>
          <ImageLogin />
        </div>
        {/* CopyRight */}
        <CopyRight />
      </div>
    </Layout>
  );
}
