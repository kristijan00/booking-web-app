import styles from './contact.module.scss';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Popup from '../../components/popup/popup';
import Loader from '../../components/loader/loader';
import Button from '../../components/button/button';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const cleanForm = () => {
    const form = document.querySelector('form') as HTMLFormElement;
    if (form) {
      form.reset(); // Reset the form fields
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true); // Show the loader
    e.preventDefault();

    emailjs
      .sendForm('service_kristijan',
        'template_3y14uae',
        e.target as HTMLFormElement,
        'XPey2nE5qecJwEz1R')
      .then(
        () => {

          setPopupTitle('Tack för ditt meddelande!'); // Title for the popup
          setPopupMessage('E-postmeddelandet har skickats!'); // Success message
          handleOpenPopup(); // Show the popup after successful email sending
        },
        () => {
          setPopupTitle('Fel vid meddelande'); // Title for the popup
          setPopupMessage('Failed to send email. Please try again.'); // Failure message
          handleOpenPopup();
        },
      ).finally(() => {
        cleanForm(); // Clean the form after sending the email
        setIsLoading(false); // Hide the loader
      });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.contactTextContainer}>
          <h2 className={styles.contactTitle}>Kontakta oss</h2>
          <p className={styles.contactText}>
            För att boka tid eller ställa frågor, vänligen kontakta oss via telefon - <a href="tel:0764178225">076 417 8225</a> eller e-post:<br /><br />
          </p>
        </div>
        <div className={styles.contactForm}>
          <form action="" method="POST" onSubmit={handleSubmit}>
            <div className={styles.nameContainer}>
              <div className={styles.field} style={{ '--count': 1 } as React.CSSProperties}>
                <label htmlFor="name">Fornamn</label><br />
                <input type="text" id="name" name="firstName" required /><br />
              </div>

              <div className={styles.field} style={{ '--count': 2 } as React.CSSProperties}>
                <label htmlFor="lastName">Efternamn</label><br />
                <input type="text" name="lastName" required /><br />
              </div>
            </div>

            <div className={styles.field} style={{ '--count': 3 } as React.CSSProperties}>
              <label htmlFor="email">E-post</label><br />
              <input type="email" id="email" name="email" required /><br />
            </div>

            <div className={styles.field} style={{ '--count': 4 } as React.CSSProperties}>
              <label htmlFor="message">Meddelande</label><br />
              <textarea id="message" name="message" rows={4} required></textarea><br />
            </div>
            <Button text="Skicka" className={styles.contactButton} type="submit"></Button>
          </form>
        </div>
      </div>
      {showPopup && (
        <Popup
          title={popupTitle}
          message={popupMessage}
          buttonName="Stäng"
          onClose={handleClosePopup}
        />
      )}
      {isLoading && (
        <Loader />
      )}
    </div>
  );
};

export default Contact;