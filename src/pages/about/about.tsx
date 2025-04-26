import styles from './about.module.scss';
import KristinaPicture from '../../assets/pictures/mobile-barbershop.png';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutTitle}>Om Kristina Kristo</h2>
          <p className={styles.aboutText}>
            Kristina Kristo är en passionerad och erfaren frisör som tar skönhet och stil direkt till dig.<br /><br />
            Som en mobil frisör erbjuder hon personliga och högkvalitativa tjänster i ditt eget hem, på kontoret eller vid olika evenemang.<br /><br />
            Med sin kreativitet, känsla för detaljer och varma personlighet gör Kristina varje besök till en avslappnande och upplyftande upplevelse.<br /><br />
            Var du än befinner dig, är hon bara ett samtal bort från att få dig att känna dig som ditt bästa jag.
          </p>
          <button className={styles.appointmentButton} onClick={() => navigate('/contact')}>Boka tid</button>
        </div>

        <div className={styles.imageContainer}>
          <img src={KristinaPicture} alt="Kristina Kristo" className={styles.aboutImage} />
        </div>
      </div>
    </div>
  );
};

export default About;