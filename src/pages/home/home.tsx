import styles from './home.module.scss';
import headerPicture from '../../assets/pictures/main-header.png'; // Import the header picture
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <div className={styles.headerText}>
            <h2 className={styles.headerTitle}>Kristinas Hemklipnning</h2>
            <h3 className={styles.headerSubtitle}>Din frisör i Stockholm</h3>
            <h4 className={styles.headerSubtitle}>Boka tid online</h4>
            <button className={`${styles.contactButton} ${styles.bouncy}`} onClick={() => navigate('/contact')}>Contact</button>
          </div>
          <img src={headerPicture} alt="Main" className={styles.mainImage} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Home;