import React from 'react';
import styles from './ListItem.module.css'

/**
 * Item in a list
 * @param children Single list item text
 * @returns {JSX.Element}
 * @constructor
 */
function ListItem({children}) {
    return (
        <li className={styles['list-item']}>{children}</li>
    );
}

export default ListItem;