import React from 'react';
import styles from './<%= props.name %>.scss';

const <%= props.name %> = () => {
    return <div className={styles.wrapper}><%= props.name %></div>;
}

export default <%= props.name %>;