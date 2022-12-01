import Image from 'next/image';
import styles from './style.module.css';

export default function index() {
  return (
    <div className={styles.logo}>
      <Image
        src="/assets/logo.png"
        width={250}
        height={150}
        alt="Urbanon Logo"
      />
    </div>
  );
}
