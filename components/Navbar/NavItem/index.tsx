import Link from 'next/link';
import { UrlObject } from 'url';
import styles from '../style.module.css';

interface propsNavItem {
  text: string | any;
  href: string | UrlObject;
  active: boolean | any;
}

export default function NavItem(props: propsNavItem) {
  const { text, href, active } = props;
  return (
    <Link href={href}>
      <div className={`${styles.nav__item} ${active ? 'active' : ''}`}>
        {text}
      </div>
    </Link>
  );
}
