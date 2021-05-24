import produce from 'immer';

import {
  START_NETWORK,
  END_NETWORK,
  SET_NETWORK_ERROR,
  CLEAR_NETWORK_ERROR
} from '../actions/network';
import createReducer from '../utils/reducer';

export const initialState = {
  requests: {},
  errors: {}
};

const networkReducer = createReducer(initialState, {
  [START_NETWORK]: produce((draft, action) => {
    const { actionType } = action.payload;

    draft.requests[actionType] = draft.requests[actionType]
      ? draft.requests[actionType] + 1
      : 1;
  }),
  [END_NETWORK]: produce((draft, action) => {
    const { actionType } = action.payload;

    draft.requests[actionType] = draft.requests[actionType]
      ? draft.requests[actionType] - 1
      : 0;
  }),
  [SET_NETWORK_ERROR]: produce((draft, action) => {
    const { actionType, error } = action.payload;

    draft.errors[actionType] = error;
  }),
  [CLEAR_NETWORK_ERROR]: produce((draft, action) => {
    const { actionType } = action.payload;

    draft.errors[actionType] = false;
  })
});

export default networkReducer;
