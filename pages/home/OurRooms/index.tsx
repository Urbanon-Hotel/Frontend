import Image from 'next/image';
import { AiOutlineWifi } from 'react-icons/ai';
import { TfiLayoutMediaCenter } from 'react-icons/tfi';
import { MdOutlineTv } from 'react-icons/md';
import { TbParking } from 'react-icons/tb';
import styles from '../style.module.css';

export default function OurRooms() {
  return (
    <div className={styles.sectionRooms}>
      <div className={styles.ourRooms}>
        <h4>Our</h4>
        <h2>Rooms</h2>
      </div>
      <div className={styles.imageRooms}>
        <div className={styles.cardAbout}>
          <Image src="/assets/img4.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>SINGLE BED Rp. 200.000/DAY</h3>
        </div>
        <div className={styles.cardAbout}>
          <Image src="/assets/img5.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>DOUBLE BED Rp. 250.000/DAY</h3>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styles.cardAbout}>
          <Image src="/assets/img6.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>TWIN BED HOTEL Rp. 300.000/DAY</h3>
          <ul style={{ listStyle: 'none', minWidth: 170 }}>
            <li>Facility:</li>
            <li>
              <AiOutlineWifi />
              FREE WIFI
            </li>
            <li>
              <TfiLayoutMediaCenter />
              AC
            </li>
            <li>
              <MdOutlineTv />
              TV
            </li>
            <li>
              <TbParking />
              CAR PARKING
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
