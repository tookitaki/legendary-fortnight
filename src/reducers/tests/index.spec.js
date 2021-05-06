import { createStore } from 'redux';
import appReducer from '../index';

describe('Test for Index reducer', () => {
    const store = createStore(appReducer);
    const combineReducers = Object.keys(store.getState());

    it('Should contain all the reducers', () => {
        expect(combineReducers).toContain('login');
    })
});