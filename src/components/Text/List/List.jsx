import React from 'react';
import styles from './List.module.css'

function List({children}) {
    return (
        <>
            <ul className={styles['list']}>{children}</ul>
        </>);
}

export default List;
