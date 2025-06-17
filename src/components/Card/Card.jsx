import React from 'react';
import Button from '../Button/Button.jsx';
import styles from './Card.module.css';
import text_styles from '@styles/text.module.css'
import '@styles/global.module.css'

export function Card({title, children}) {
    return (
        <div className={styles.card}>
            <div className={text_styles.p1}>{title}</div>
            <div
                className={`${text_styles.p2} ${styles.content}`}>{children}</div>
        </div>
    );
}
