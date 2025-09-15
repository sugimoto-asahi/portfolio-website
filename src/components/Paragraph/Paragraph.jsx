import React from 'react';
import styles from './Paragraph.module.css';
import textStyles from '@styles/text.module.css';

/**
 * Paragraph component for rendering text with different font sizes
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content to render (can include nested elements for mixed styling)
 * @param {number} [props.size=null] - Size level (1, 2, 3, or null for default paragraph)
 * @param {string} [props.variant=null] - Style variant ('bold', 'light', or null for regular)
 * @param {string} [props.className=null] - Additional CSS class names
 * @returns {JSX.Element} - Rendered paragraph
 */
function Paragraph({children, size, variant, className}) {
    let textClass;

    // Determine base size class
    switch (size) {
        case 1:
            textClass = variant === 'bold' ? textStyles.p1Bold : textStyles.p1;
            break;
        case 2:
            textClass = variant === 'bold' ? textStyles.p2Bold :
                variant === 'light' ? textStyles.p2Light : textStyles.p2;
            break;
        case 3:
            textClass = variant === 'bold' ? textStyles.p3Bold :
                variant === 'light' ? textStyles.p3Light : textStyles.p3;
            break;
        case 4:
            textClass = variant === 'bold' ? textStyles.p4Bold :
                variant === 'light' ? textStyles.p4Light : textStyles.p4;
            break;
        case 5:
        default:
            textClass = variant === 'bold' ? textStyles.pBold : textStyles.p;
    }

    return (
        <p className={`${textClass} ${className || ''}`}>
            {children}
        </p>
    );
}

export default Paragraph;
