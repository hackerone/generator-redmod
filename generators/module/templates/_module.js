import namespaceWords from 'lib/namespaceWords';

const namespace = '<%= props.name %>';
const actionWords = [
	// action types go here
];
const actionTypes = namespaceWords(actionWords, namespace);

// actions go here

const defaultState = {};
export default(state = defaultState, action) => {
	switch(action.type) {

		
		default: 
			break;
	}

	return state;
}
