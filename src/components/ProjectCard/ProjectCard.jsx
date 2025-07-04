import React from 'react';
import text_styles from '@styles/text.module.css'
import styles from './ProjectCard.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";
import MediaFrame from "@components/MediaFrame/MediaFrame.jsx";

export function ProjectCard({
                                title,
                                description,
                                image,
                                children,
                                route,
                                className
                            }) {
    return (
        <div className={`${styles.projectCard} ${className}`}>
            <div className={styles.headerContainer}>
                <p className={`${text_styles.p1} ${styles.titleContainer}`}>{title}</p>
                <p className={`${text_styles.p2} ${styles.description}`}>{description}</p>
            </div>
            <p className={text_styles.p}>{children}</p>

            <MediaFrame media={image}/>

            <ArrowButton className={styles.arrowButton} route={route}
                         direction='right'/>
        </div>
    );
}