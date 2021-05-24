import { createSelector } from 'reselect';
import { some, castArray, get } from 'lodash';

const requestsSelector = (state) => state.network.requests;

const errorsSelector = (state) => state.network.errors;

export const isLoadingSelector = createSelector(
  requestsSelector,
  (_state, actionType) => actionType,
  (requests, actionType) => {
    const labels = castArray(actionType);

    return some(labels, (currentLabel) => requests[currentLabel] > 0);
  }
);

export const hasErrorSelector = createSelector(
  errorsSelector,
  (_state, actionType) => actionType,
  (errors, actionType) => {
    const labels = castArray(actionType);

    return some(labels, (currentLabel) => errors[currentLabel]);
  }
);

export const getErrorSelector = createSelector(
  errorsSelector,
  (_state, actionType) => actionType,
  (errors, actionType) => {
    return get(errors, actionType);
  }
);
