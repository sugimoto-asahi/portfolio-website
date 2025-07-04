import React from 'react';
import text_styles from '@styles/text.module.css'
import styles from './LinkCard.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";

export function LinkCard({
                             children,
                             route,
                             className
                         }) {
    return (
        <div className={`${styles.linkCard} ${className}`}>
            {children}
            <ArrowButton className={styles.arrowButton} route={route}
                         direction='right'/>
        </div>
    );
}