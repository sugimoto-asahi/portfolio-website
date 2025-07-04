import React from 'react';
import styles from './CodeLine.module.css'
import textStyles from '@styles/text.module.css'
import classNames from "@util/classNames.js";


/**
 * A single line of code, for use in the Code component
 * @constructor
 */
function CodeLine({indent = 0, children}) {

    const singleIndent = '    ';
    return (<span
        className={classNames(textStyles.pCode, styles.codeLine)}>{singleIndent.repeat(indent)}{children}</span>);
}

export default CodeLine;


