import React from 'react';
import text_styles from '@styles/text.module.css'
import styles from './ProjectCard.module.css'
import ArrowButton from "@components/ArrowButton/ArrowButton.jsx";

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
                <p className={`${text_styles.p1Bold} ${styles.titleContainer}`}>{title}</p>
                <p className={`${text_styles.p3} ${styles.description}`}>{description}</p>
            </div>
            <img src={image} alt=''/>
            {children}

            <ArrowButton className={styles.arrowButton} route={route}/>
        </div>
    );
}