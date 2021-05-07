import appReducer from '../index';

describe('Test for Index reducer', () => {
  it('Should contain all the reducers', () => {
    const state = appReducer(undefined, { type: 'UNHANDLED' });
    expect(state).toHaveProperty('login');
  });
});
