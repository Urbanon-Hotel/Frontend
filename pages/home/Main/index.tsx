import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import CustomDatePicker from '../../../components/CustomDatePicker';
import styles from '../style.module.css';

export default function Main() {
  return (
    <div className={styles.warapper}>
      <div className={styles.warappeddate}>
        <CustomDatePicker defval="CHECKIN-DATE" />
      </div>
      <div className={styles.warappeddate}>
        <CustomDatePicker defval="CHECKOUT-DATE" />
      </div>
      <div className={styles.warappeddate}>
        <button type="button" className="custom-input">
          <FaBed />
          <select className="custom-input">
            <option value="SINGLE BED">SINGLE BED</option>
            <option value="DOUBLE BED">DOUBLE BED</option>
            <option value="TWIN BED">TWIN BED</option>
          </select>
        </button>
      </div>
      <div className={styles.warappeddate}>
        <Link href="/payment">
          <button type="button" className="custom-input">
            Submit
            {`${' '}`}
            <AiOutlineArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}
