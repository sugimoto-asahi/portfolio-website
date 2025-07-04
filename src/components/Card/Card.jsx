import React from 'react';
import Button from '../Button/Button.jsx';
import styles from './Card.module.css';
import text_styles from '@styles/text.module.css'
import '@styles/global.module.css'

/**
 * Card component
 * @param title Title of card
 * @param children Content
 * @param type Title or content. Title cards have larger fonts.
 * @returns {JSX.Element}
 * @constructor
 */
export function Card({title, children, type, className}) {
    let titleTextClass;
    let childrenTextClass;

    if (type === 'title') {
        titleTextClass = text_styles.p1;
    } else if (type === 'content') {
        titleTextClass = text_styles.p2;
    }

    return (
        <div className={`${styles.card} ${className}`}>
            <div className={titleTextClass}>{title}</div>
            <div
                className={`${styles.content}`}>{children}</div>
        </div>
    );
}
