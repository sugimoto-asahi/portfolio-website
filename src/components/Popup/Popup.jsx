import React, {useEffect, useRef, useState} from 'react';
import styles from './Popup.module.css'
import textStyles from '@styles/text.module.css'

function Popup({position, children}) {

    const [popupTopEdge, setPopupTopEdge] = useState(0);
    const [popupBottomEdge, setPopupBottomEdge] = useState(0);

    const popupRef = useRef(null);


    // The y of the provided position is intended to be at the y midpoint
    // of the popup. If we use the y coordinate as is, the top left corner
    // of the popup will be at that position instead. Therefore, we need to find
    // out the height of the popup and add an offset to the provided position
    useEffect(() => {
        const rect = popupRef.current.getBoundingClientRect();
        setPopupTopEdge(rect.top);
        setPopupBottomEdge(rect.bottom);
    }, []);

    // further additional offset
    // +ve -> move down the viewport
    let adjust = 10;

    let finalPosition = {
        top: position.top - ((popupBottomEdge - popupTopEdge) / 2) + adjust,
        left: position.left
    }

    return (
        <span className={styles.popupContainer} style={finalPosition}
              ref={popupRef}>
            <span className={textStyles.p}>{children}</span>
        </span>
    );
}

export default Popup;