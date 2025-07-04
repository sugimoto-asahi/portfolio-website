import React from 'react';
import styles from './Code.module.css'

/**
 * Code block
 * @constructor
 */
function Code({children}) {
    return (
        <div className={styles.codeContainer}>{children}</div>
    );

}

export default Code;