import React, {useEffect, useRef, useState} from 'react'
import styles from './ScrollyTeller.module.css'
import Lottie from "lottie-react";

// markers are of the format 'm#', where # is the integer index
/**
 * Verify that an animation marker is of a valid format
 * @param marker Marker to verify
 */
function validateMarker(marker) {
    const regex = /^m\d+$/;
    return regex.test(marker);
}


/**
 * Parse animation marker / time data into a map
 * @param animationData
 */
function parseAnimationData(animationData) {
    const markers = animationData.markers;
    const map = new Map();
    for (const marker of markers) {
        map.set(marker.cm, marker.tm);
    }
    return map;
}

/**
 *
 * @param width Width of component
 * @param height Height of component
 * @param animationData Lottie json animation data
 * @param position Fixed position of component
 * @param marker marker number
 * @returns {Element}
 * @constructor
 */
function ScrollyTeller({width, height, animationData, position, marker}) {
    const animationRef = useRef(null);
    const animationMap = parseAnimationData(animationData);

    useEffect(() => {
        if (animationRef.current && validateMarker(marker)) {
            const currentMarker = marker.substring(1);
            console.log(currentMarker);
            const currentMarkerNumber = Number(currentMarker);
            const start = 's' + currentMarkerNumber;
            const end = 'e' + currentMarkerNumber;

            animationRef.current.setDirection(1);
            animationRef.current.playSegments([[animationMap.get(start), animationMap.get(end)]], true);

        }
    }, [marker]);


    let finalStyle = {
        width: width || '100%',
        height: height || '100%',
        left: position.left,
        top: position.top,
    }

    return (<div className={styles.scrollyTeller} style={finalStyle}>
        <Lottie animationData={animationData}
                lottieRef={animationRef}
                autoplay={false}
                loop={false}
        />
    </div>);
}

export default ScrollyTeller;