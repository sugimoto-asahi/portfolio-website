import React from 'react';
import styles from './Title.module.css'

/**
 * General-use title text. Styled as written directly on the blackborad
 * @param children Text content of title
 * @param Heading level (1, 2, 3, etc., where 1 is the largest)
 * @constructor
 */
function Title({children, level}) {
    const Tag = `h${level}`;
    return (
        <Tag className={styles[Tag]}>{children}</Tag>
    );
}

export default Title;