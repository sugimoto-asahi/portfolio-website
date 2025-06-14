import React from 'react';
import Button from '../Button/Button.jsx';
import styles from './Card.module.css';
import '../../global.module.css'

export function Card({title, description, route, imageUrl}) {
    return (
        <div className={styles['card']}>
            <div className={styles['card__content']}>
                <img className={styles['card__image']} src={imageUrl}
                     alt={title}/>
                <h2 className={styles['dark-text']}>{title}</h2>
                <p className={styles['dark-text']}>{description}</p>
                <Button className={styles.button} route={route}/>
            </div>
        </div>
    );
}
