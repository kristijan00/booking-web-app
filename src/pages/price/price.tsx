import styles from './price.module.scss';
import { useEffect, useState } from 'react';

const Price = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedPricePage');
    if (!hasVisited) {
      setShowArrow(true);
      localStorage.setItem('hasVisitedPricePage', 'true');
    }

    const handleScroll = () => {
      setShowArrow(false); // Hide the arrow after scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2>Prislista</h2>
        <div className={styles.priceContainer}>
          <div className={styles.subContainer}>
            <div className={styles.priceItem} style={{ '--count': 1 } as React.CSSProperties}>
              <h3>Damer</h3>
              <p>Klippning kort hår <b>390 kr</b></p>
              <p>Klippning medellångt hår <b>430 kr</b></p>
              <p>Klippning långt hår <b>480 kr</b></p>
            </div>

            <div className={styles.priceItem} style={{ '--count': 2 } as React.CSSProperties}>
              <h3>Dampensionär</h3>
              <p>Klippning kort hår <b>330 kr</b></p>
              <p>Klippning medellångt/långt hår <b>370 kr</b></p>
            </div>

            <div className={styles.priceItem} style={{ '--count': 3 } as React.CSSProperties}>
              <h3>Herrar</h3>
              <p>Klippning kort hår <b>340 kr</b></p>
              <p>Klippning medellångt/långt hår <b>370 kr</b></p>
              <p>Maskinklippning (från pris) <b>190 kr</b></p>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.priceItem} style={{ '--count': 4 } as React.CSSProperties}>
              <h3>Herrpensionär</h3>
              <p>Klippning  <b>310 kr</b></p>
              <p>Klippning medellångt/långt hår <b>340 kr</b></p>
            </div>

            <div className={styles.priceItem} style={{ '--count': 5 } as React.CSSProperties}>
              <h3>Barn (0–12 år)</h3>
              <p>Klippning kort hår <b>270 kr</b></p>
              <p>Klippning långt hår <b>310 kr</b></p>
            </div>

            <div className={styles.priceItem} style={{ '--count': 6 } as React.CSSProperties}>
              <h3>Extra tjänster</h3>
              <p>Luggklippning <b>100 kr</b></p>
              <p>Skäggtrimning <b>150 kr</b></p>
            </div>
          </div>
        </div>
      </div>
      {showArrow && (
        <div className={styles.scrollArrow}>
          <span>↓</span>
        </div>
      )}
    </ div>
  );
};

export default Price;