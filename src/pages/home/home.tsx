import styles from './home.module.scss';
import headerPicture from '../../assets/pictures/main-header.png'; // Import the header picture
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
          <div className={styles.headerText}>
            <h2 className={styles.headerTitle}>Kristina Hemklipnning</h2>
            <h3 className={styles.headerSubtitle}>Din frisör i Stockholm</h3>
            <h4 className={styles.headerSubtitle}>Boka tid online</h4>
            <Link to={'/contact'} className={styles.contactButton}>Boka tid</Link>
          </div>
          <img src={headerPicture} alt="Main" className={styles.mainImage} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Home;