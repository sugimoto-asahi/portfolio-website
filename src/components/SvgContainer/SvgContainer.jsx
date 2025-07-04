import React from 'react'
import styles from './SvgContainer.module.css'


/**
 * Positioning container for svgs
 * @param style Inline styles for the container
 * @param SvgComponent the svg react component to render
 * @returns {Element}
 * @constructor
 */
function SvgContainer({style, SvgComponent}) {

    const finalStyle = {
        ...style,

        // default values
        width: style.width || '100%',
        height: style.height || '100%'
    }
    return (<div className={styles.svgContainer} style={finalStyle}>
        <SvgComponent/>
    </div>);
}

export default SvgContainer;