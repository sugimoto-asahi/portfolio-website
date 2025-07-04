import React from 'react';
import styles from './SubCard.module.css'
import text_styles from '@styles/text.module.css'
import Paragraph from "@components/Paragraph/Paragraph.jsx";

function SubCard({title, children}) {
    return (
        <div className={styles.subcard}>
            {title && <Paragraph size={3} variant="bold">{title}</Paragraph>}
            {children}
        </div>
    );
}

export default SubCard;
