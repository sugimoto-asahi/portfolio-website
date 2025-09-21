import React from 'react';
import styles from './List.module.css';
import textStyles from '@styles/text.module.css';

/**
 * List component for rendering custom bulleted lists
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - List items to render
 * @param {React.ReactNode} [props.bulletIcon] - Custom bullet icon as inline SVG (paste custom SVG here)
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} - Rendered list
 */
function List({children, bulletIcon, className}) {
    // Default bullet icon (double arrow)
    const bullet = (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px"
             viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
            <path
                d="M402.23-480 218.85-664 261-706.15 487.15-480 261-253.85 218.85-296l183.38-184Zm254 0L472.85-664 515-706.15 741.15-480 515-253.85 472.85-296l183.38-184Z"/>
        </svg>);

    // Convert children to array to handle single child or multiple children
    const items = React.Children.toArray(children);

    return (
        <ul className={`${styles.list} ${className || ''}`}>
            {items.map((item, index) => (
                <li key={index}
                    className={`${styles.listItem} ${textStyles.li}`}>
                    <div className={styles.bulletContainer}>
                        {bullet}
                    </div>
                    <span className={styles.content}>
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default List;