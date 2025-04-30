import styles from './price.module.scss';
import { useState, useRef } from 'react';

const Price = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active card
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft; // Current horizontal scroll position
      const cardWidth = container.offsetWidth; // Width of each card
      const currentIndex = Math.round(scrollLeft / cardWidth); // Calculate the active card index
      setActiveIndex(currentIndex);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h2>Prislista</h2>
        <div className={styles.priceContainer}
          ref={containerRef}
          onScroll={handleScroll}>
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
        <div className={styles.pagination}>
          {[...Array(6)].map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.active : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </ div>
  );
};

export default Price;