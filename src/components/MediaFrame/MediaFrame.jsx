import React from 'react';
import styles from './MediaFrame.module.css'
import ReactPlayer from 'react-player';

/**
 *
 * @param media Either an image or embedded video
 * @returns {JSX.Element}
 * @constructor
 */
function MediaFrame({media}) {
    const videoRegex = /.*youtube.*/i
    const imageRegex = /.*\.(jpg|png|jpeg)$/i

    let shouldStretch = false;
    let mediaContent;
    if (videoRegex.test(media)) {
        // this is a video

        // make a 16:9 container for the player
        mediaContent =
            <div className={styles.videoContainer}><ReactPlayer src={media}
                                                                className={styles.reactPlayer}
                                                                width='100%'
                                                                height='100%'
                                                                controls={false}
                                                                rel={false}
            />
            </div>;

        // whether the root element of this component should stretch to
        // fill the width of its container, or only resize enough
        // to fit its own content
        shouldStretch = true;

    } else if (imageRegex.test(media)) {
        // this is an image
        mediaContent =
            <img src={media} alt={''} className={styles.image}/>;
    }

    return (<div
            className={`${styles.mediaFrame} ${shouldStretch && styles.stretch}`}>
            <div className={styles.outerFrame}>
                <div className={styles.innerFrame}>
                    {mediaContent}
                </div>
            </div>
        </div>
    );
}

export default MediaFrame;