import React from 'react';
import { connect } from 'react-redux';

import styles from './<%= props.name %>.scss';

const mapDispatch = () => {
	return {};
}

const mapStore = (state) => {
	return state.<%= props.reducer %>;
}


const <%= props.name %> = () => {
    return <div className={styles.wrapper}><%= props.name %></div>;
}

export default connect(mapStore, mapDispatch)(<%= props.name %>);