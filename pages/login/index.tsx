import Link from 'next/link';
import React from 'react';
import CopyRight from '../../components/Login/CopyRight';
import ImageLogin from '../../components/Login/ImageLogin';
import Layout from '../../components/Layout';
import { MetaTitle } from '../../components/Utils';
import styles from './style.module.css';
import Logo from '../../components/Login/Logo';

export default function index() {
  return (
    <Layout pageTitle={MetaTitle.LOGIN}>
      <div className={styles.container}>
        {/* HeaderLogin */}
        <Logo />

        {/* ContentLogin */}
        <div className={styles.content}>
          <div className={styles.form}>
            <p className={styles.formTitle}>login</p>
            <form action="#" method="_post">
              <input
                placeholder="EMAIL ADDRESS"
                type="text"
                name="email"
                id="email"
              />
              <input
                placeholder="PASSWORD"
                type="password"
                name="password"
                id="password"
              />
              <p className={styles.txtRegister}>
                DON’T HAVE AN ACCOUNT YET?
                {`${' '}`}
                <Link href="/register">REGISTER</Link>
              </p>
              <button type="button" className={styles.btnLogin}>
                <Link href="/home">Login</Link>
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
