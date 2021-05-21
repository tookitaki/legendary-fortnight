import { get, castArray, compact } from 'lodash';

import PATH from '../constants/path';
import { API_URL } from '../constants/appConfig';
import history from '../utils/history';
import { request } from '../utils/api';
import { getLoginDetails } from '../selectors/login';

import {
  startNetwork,
  endNetwork,
  clearNetworkError,
  setNetworkError
} from '../actions/network';
import { logoutUser } from '../actions/login';

export function apiMiddleware({ getState, dispatch }) {
  return (next) => async (action) => {
    if (!get(action, 'meta.api')) {
      return next(action);
    }

    const { payload, type: actionType } = action;
    const {
      path,
      baseUrl = API_URL,
      onSuccess,
      onError,
      data,
      headers: actionHeaders,
      method
    } = payload;

    next(action);
    dispatch(clearNetworkError(actionType));
    dispatch(startNetwork(actionType));

    try {
      const headers = {
        ...actionHeaders,
        Authorization: `Token ${getLoginDetails(getState()).token}`
      };

      const response = await request({
        method,
        url: `${baseUrl}/${path}`,
        data,
        headers
      });

      if (onSuccess) {
        dispatchActions(dispatch, onSuccess, response, action.meta);
      }

      dispatch(endNetwork(actionType));
    } catch (error) {
      console.error('API error', error, action);
      dispatch(setNetworkError(actionType, error));

      if (get(error, 'response.status') === 401) {
        dispatch(logoutUser());
        history.push(PATH.defaultPath);
      }

      if (onError) {
        dispatchActions(dispatch, onError, error, action.meta);
      }
      dispatch(endNetwork(actionType));
    }
  };
}

function dispatchActions(dispatch, actions, response, actionMeta) {
  compact(castArray(actions)).forEach((actionCreator) => {
    const action = actionCreator(response, actionMeta);

    if (action) {
      return dispatch(action);
    }
  });
}

export default apiMiddleware;
