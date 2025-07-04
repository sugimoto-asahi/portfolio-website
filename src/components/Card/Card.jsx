import React from 'react';
import classNames from '@util/classNames.js'
import Button from '../Button/Button.jsx';
import styles from './Card.module.css';
import text_styles from '@styles/text.module.css'
import '@styles/global.module.css'

/**
 * Card component
 * @param children Content
 * @param type Title or content. Title cards have larger fonts.
 * @param className
 * @returns {JSX.Element}
 * @constructor
 */
export function Card({children, className}) {
    return (
        <div className={classNames(styles.card, className)}>
            {children}
        </div>
    );
}
