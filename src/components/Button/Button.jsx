import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router';
import styles from './Button.module.css';


function Button({className, linkText, route}) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const [isClicked, setIsClicked] = useState(false);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    let foregroundClass = (() => {
        if (isClicked) {
            return styles.foregroundClicked;
        } else if (isHovered) {
            return styles.foregroundHovered;
        } else {
            return styles.foregroundInactive;
        }
    })();

    let linkClass = (() => {
        if (isClicked) {
            return styles.linkClicked;
        } else if (isHovered) {
            return styles.linkHovered;
        } else {
            return styles.linkInactive;
        }
    })();


    return (
        <div className={`${styles.buttonContainer} ${className || ''}`}>
            <div
                className={isClicked ? styles.backgroundActive : styles.backgroundInactive}/>
            <div
                className={foregroundClass}/>
            <Link
                className={linkClass}
                to={route}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {linkText}
            </Link>
        </div>
    );
}

export default Button;