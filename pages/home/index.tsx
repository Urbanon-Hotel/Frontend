import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../../components/Navbar';
import About from './About';
import OurRooms from './OurRooms';
import Main from './Main';
import styles from './style.module.css';
import { Polygon1, Polygon2, Polygon3 } from '../../components/Utils/Polygon';
import Contact from './Contact';

export default function index() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={`${styles.section} ${styles.bannerhome}`}>
        <Main />
      </div>
      <div className={styles.section}>
        <About />
        <Polygon1 />
        <Polygon2 />
      </div>
      <div className={styles.section}>
        <OurRooms />
        <Polygon1 />
        <Polygon2 />
      </div>
      <div className={styles.section}>
        <Contact />
        <Polygon3 />
      </div>
      <div className={styles.footer}>Copyright 2022 - UrbanonHotel.</div>
    </div>
  );
}
