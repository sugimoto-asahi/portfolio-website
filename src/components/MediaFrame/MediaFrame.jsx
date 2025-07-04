import React from 'react';
import styles from './MediaFrame.module.css'

/**
 *
 * @param media Either an image or embedded video
 * @returns {JSX.Element}
 * @constructor
 */
function MediaFrame({media}) {
    return (<div className={styles.mediaFrame}>
            <div className={styles.outerFrame}>
                <div className={styles.innerFrame}>
                    <img src={media} alt={''} className={styles.image}/>
                </div>
            </div>
        </div>
    );
}

export default MediaFrame;