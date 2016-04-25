import { createStore } from 'redux';
import { testStore } from '../utils';
import * as Actions from 'module/<%= props.name %>';
import Reducer from 'module/<%= props.name %>';


describe('a <%= props.name %> module', function () {
	beforeEach(function () {
		this.store = createStore(Reducer);
	});

	it('should return default state', function (done) {
		
		let action = Actions.defaultAction(),
			callback = (state) => {
				done();
			};

		testStore(this.store, action, callback);
	});
});