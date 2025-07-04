import React from 'react';
import styles from './Math.module.css'
import katex from 'katex';
import 'katex/dist/katex.min.css';

function Math({tex, displayMode = false}) {
    const html = katex.renderToString(tex, {
        throwOnError: false,
        displayMode: displayMode,
    });

    return <span dangerouslySetInnerHTML={{__html: html}}/>;
}

export default Math;