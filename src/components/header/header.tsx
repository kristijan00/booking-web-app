import styles from './header.module.scss';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavItemClick = () => {
    if (window.innerWidth <= 768) { // Close menu only on mobile
      setMenuOpen(false);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle} onClick={() => navigate('/home')}>Hemklippning</h1>
      <div className={styles.headerRight}>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        <nav className={`${styles.headerNav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem} onClick={handleNavItemClick}><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={'/home'}>Home</NavLink></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={'/about'}>About</NavLink></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={'/contact'}>Contact</NavLink></li>
            <li className={styles.navItem} onClick={handleNavItemClick}><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={'/price'}>Price</NavLink></li>
          </ul>
        </nav>
        {/* <button className={styles.appointmentButton}>Appointment</button> */}
        <Link to={'/contact'} className={styles.appointmentButton}>Boka tid</Link>
      </div>
    </div>
  );
};

export default Header;