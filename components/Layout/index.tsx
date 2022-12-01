import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './style.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <div className={styles.container}>
      <Header title={pageTitle} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
