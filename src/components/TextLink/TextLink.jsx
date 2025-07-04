import React, {useEffect, useRef, useState} from 'react';
import styles from './TextLink.module.css'
import Popup from "@components/Popup/Popup.jsx";

function TextLink({link, popupMessage, children}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    let linkClass = (() => {
        if (isHovered) {
            return styles.linkHovered;
        } else {
            return styles.linkDefault
        }
    })();

    const [linkTextTopEdge, setLinkTextY] = useState(0);

    const linkTextRef = useRef(null);

    // recalculate the y-position of the linktext relative to the viewport
    // whenever the user scrolls
    const handleScroll = () => {
        if (linkTextRef.current) {
            const rect = linkTextRef.current.getBoundingClientRect();
            setLinkTextY(rect.top);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <span className={styles.textLink}>
            <a href={link} className={linkClass}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               ref={linkTextRef}>{children}</a>
            {isHovered && popupMessage &&
                <Popup
                    position={{
                        top: linkTextTopEdge,
                        left: '75%'
                    }}>{popupMessage}</Popup>}
        </span>
    );
}

export default TextLink;