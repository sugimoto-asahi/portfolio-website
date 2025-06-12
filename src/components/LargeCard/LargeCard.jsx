import React from 'react';
import Button from '../Button/Button.jsx';
import styles from './LargeCard.module.css';
import '../../global.module.css'

export function LargeCard({title, description}) {
    return (
        <div className={styles['large-card']}>
            <div className={styles['large-card__content']}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button className={styles.button} route="/njin"/>
            </div>
        </div>
    );
}
