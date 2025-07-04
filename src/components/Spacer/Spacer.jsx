import React from 'react';
import styles from './Spacer.module.css'

/**
 * Vertical spacer
 * @param size Size level of spacers, 1 through 5. 1 is the largest.
 * @returns {Element}
 * @constructor
 */
function Spacer({size}) {
    let spacerClass;
    switch (size) {
        case 1:
            spacerClass = styles.spacer1;
            break;
        case 2:
            spacerClass = styles.spacer2;
            break;
        case 3:
            spacerClass = styles.spacer3;
            break;
        case 4:
            spacerClass = styles.spacer4;
            break;
        case 5:
            spacerClass = styles.spacer5;
            break;
        default:
            spacerClass = styles.spacer5;
    }
    return (<div className={spacerClass}/>);
}

export default Spacer;