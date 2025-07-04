import React from 'react'
import textStyles from '@styles/text.module.css'
import globalStyles from '@styles/global.module.css'


// fast bolding shortcut
// @note assumes default font size (1rem)
export function B({children}) {
    return (<strong className={textStyles.pBold}>{children}</strong>);
}

// fast italics shortcut
// @note assumes default font size (1rem)
export function I({children}) {
    return (<em className={textStyles.pItalic}>{children}</em>);
}

/**
 * Code coloring
 */

// function
export function CF({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-function"}}>{children}</span>);
}

// keyword
export function CK({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-keyword"}}>{children}</span>);
}

// string
export function CS({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-string"}}>{children}</span>);
}

// comment
export function CC({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-comment"}}>{children}</span>);
}

// name
export function CN({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-name"}}>{children}</span>);
}

// type
export function CT({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "var(--code-color-type"}}>{children}</span>);
}

// default (black)
export function C({children}) {
    return (<span className={textStyles.pCode}
                  style={{color: "black"}}>{children}</span>);
}
