export const START_NETWORK = 'START_NETWORK';
export const END_NETWORK = 'END_NETWORK';
export const SET_NETWORK_ERROR = 'SET_NETWORK_ERROR';
export const CLEAR_NETWORK_ERROR = 'CLEAR_NETWORK_ERROR';

export const startNetwork = (actionType) => ({
  type: START_NETWORK,
  payload: {
    actionType
  }
});

export const endNetwork = (actionType) => ({
  type: END_NETWORK,
  payload: {
    actionType
  }
});

export const setNetworkError = (actionType, error) => ({
  type: SET_NETWORK_ERROR,
  payload: {
    actionType,
    error
  }
});

export const clearNetworkError = (actionType) => ({
  type: CLEAR_NETWORK_ERROR,
  payload: {
    actionType
  }
});
