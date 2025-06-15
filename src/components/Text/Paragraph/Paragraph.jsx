import React from 'react';
import './Paragraph.module.css'
import styles from './Paragraph.module.css'

function Paragraph({children}) {
    return (
        <p className={styles['text']}>{children}</p>
    )
}

export default Paragraph;