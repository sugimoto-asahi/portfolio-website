import React from 'react';
import styles from './SubCard.module.css'
import text_styles from '@styles/text.module.css'

function SubCard({title, children}) {
    return (
        <div className={styles.subcard}>
            <p className={text_styles.p3Bold}>{title}</p>
            <p className={text_styles.p3}>{children}</p>
        </div>
    );
}

export default SubCard;