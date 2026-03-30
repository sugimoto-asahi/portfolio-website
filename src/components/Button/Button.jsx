import React from 'react';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router';
import styles from './Button.module.css';

/**
 * Helper method for navigating to different types of routes.
 * External: Link to a different domain
 * Internal: Link to a different page
 * Download: Link to a file download
 * Action: Calls a provided callback instead of navigating
 * @param route Route to navigate to
 * @param type Route type ('external', 'internal', 'download', 'action')
 * @param navigator React Router navigate function to use for client-side routing
 * @param onClick Callback invoked when type is 'action'
 */
function visit(route, type, navigator, onClick) {
    if (type === 'external') {
        window.open(route);
    } else if (type === 'internal') {
        navigator(route);
    } else if (type === 'download') {
        const a = document.createElement('a');
        a.href = route;

        // strip the route of its path for use as the filename of the downloaded
        // file
        a.download = route.substring(route.lastIndexOf('/') + 1);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else if (type === 'action') {
        onClick?.();
    } else {
        console.error('Invalid route type:', type);
    }
}


/**
 * Button component with customizable route
 * @param {string} linkText The text displayed within the button.
 * @param {string} route Target route (not required when type='action')
 * @param {string} color Color theme of the button - either red or black
 * @param {string} type Type of route - 'internal', 'external', 'download', or 'action'
 * @param {function} onClick Callback invoked when type='action'
 * @return {JSX.Element} The rendered Button component.
 */
function Button({className, linkText, route, color, type = 'internal', onClick}) {
    const navigator = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    }
    const handleMouseLeave = () => setIsHovered(false);

    const [isClicked, setIsClicked] = useState(false);
    const handleMouseDown = () => {
        setIsClicked(true)
    };
    const handleMouseUp = () => {
        // allow animation to complete
        setTimeout(() => visit(route, type, navigator, onClick), 10);
        setIsClicked(false)
    };

    let foregroundClass = (() => {
        const colorClass = color === 'red' ? styles.foregroundRed : styles.foregroundBlack;
        if (isClicked) {
            return `${styles.foregroundClicked} ${colorClass}`;
        } else if (isHovered) {
            return `${styles.foregroundHovered} ${colorClass}`;
        } else {
            return `${styles.foregroundInactive} ${colorClass}`;
        }
    })();

    let backgroundColorClass = (() => {
        return color === 'red' ? styles.backgroundRed : styles.backgroundBlack;
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
                className={`${isClicked ? styles.backgroundActive : styles.backgroundInactive} ${backgroundColorClass}`}/>
            {/* Target for mouse events like clicks */}
            <div className={styles.clickTarget}
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onMouseDown={handleMouseDown}
                 onMouseUp={handleMouseUp}/>

            <div
                className={foregroundClass}/>
            <span className={linkClass}>{linkText}</span>
        </div>
    );
}

export default Button;
