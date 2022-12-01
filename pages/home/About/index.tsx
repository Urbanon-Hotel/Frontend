import Image from 'next/image';
import styles from '../style.module.css';

export default function About() {
  return (
    <div className={styles.sectionAbout}>
      <div className={styles.aboutDetail}>
        <h4>About</h4>
        <h2>Hotel</h2>
        <div className={styles.aboutDesc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          aut qui, reiciendis beatae nesciunt eum fugiat nulla sit aliquam
          repellat exercitationem, veritatis ut consequatur quisquam rem tenetur
          asperiores quidem. Cupiditate. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laborum fugiat molestiae aspernatur impedit sed
          alias facilis quisquam nostrum pariatur possimus aliquam deleniti
          reprehenderit est id voluptatibus provident, eius perferendis
          inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe dolore est officia cumque, nobis in accusantium et nam minima a
          illum atque, temporibus alias! Doloribus necessitatibus enim in alias
          quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          omnis, soluta perferendis amet temporibus repudiandae molestias
          excepturi at quae quo dolorem cumque, error molestiae, consectetur
          odio laboriosam hic ex veritatis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Possimus, delectus provident. Numquam
          nesciunt architecto odit ea temporibus asperiores eaque! Veritatis
          praesentium corporis aliquid harum amet culpa repudiandae
          voluptatibus, ullam dolore.
        </div>
      </div>
      <div className={styles.aboutImage}>
        <div className={styles.cardAbout}>
          <Image src="/assets/img1.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>Meeting Room</h3>
        </div>
        <div className={styles.cardAbout}>
          <Image src="/assets/img2.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>Room</h3>
        </div>
        <div className={styles.cardAbout}>
          <Image src="/assets/img3.png" width={260} height={200} alt="image1" />
          <h3 className={styles.overlayCard}>Meeting Room</h3>
        </div>
      </div>
    </div>
  );
}
