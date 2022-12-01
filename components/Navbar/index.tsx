import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LinkMenu } from '../Utils';
import NavItem from './NavItem';
import styles from './style.module.css';

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <div>
            <Image
              src="/assets/logo.png"
              width={160}
              height={90}
              alt="Urbanon Logo"
            />
          </div>
        </Link>
        <div
          className={styles['nav__menu-bar']}
          onClick={() => setNavActive(!navActive)}
          aria-hidden="true"
        >
          <div />
          <div />
          <div />
        </div>
        <div
          className={`${styles['nav__menu-list']} ${navActive ? 'active' : ''}`}
        >
          {LinkMenu.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              aria-hidden="true"
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
