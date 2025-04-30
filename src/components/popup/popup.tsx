import styles from './popup.module.scss';
import { useEffect } from 'react';
import Button from '../button/button';

interface PopupProps {
  title: string;
  message: string;
  buttonName: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = props => {

  // Close the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onClose();
    }, 5000);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [props.onClose]);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h3 className={styles.popupTitle}>{props.title}</h3>
        <p className={styles.popupText}>{props.message}</p>
        <Button text={props.buttonName} onClick={props.onClose} className={styles.closeButton} />
      </div>
    </div>
  );
};

export default Popup;