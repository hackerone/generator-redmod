export const testStore = (store, action, callback) => {
	store.subscribe(() => {
		callback.call(store.getState());
	});
	store.dispatch(action);
}
