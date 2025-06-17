import React from 'react';
import styles from './Scroller.module.css';

function Scroller({ targetId, children }) {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button 
      className={styles.scroller} 
      onClick={scrollToTarget}
      aria-label={`Scroll to ${targetId}`}
    >
      {children}
    </button>
  );
}

export default Scroller;
