import produce from 'immer';

import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/login';
import createReducer from './reducersUtil';

const initialState = { isLoggedIn: false, loading: false, error: null};

const loginUser = produce((draft, action) => {
    draft.loading = true;
});

const loginUserSuccess = produce((draft, action) => {
    draft.loading = false;
    draft.isLoggedIn = true;
    draft.auth = {
        token :action.payload.token
    }
});

const logoutUser = () => {
    return initialState;
}

  
const login = createReducer(initialState, {
    [LOGIN_USER]: loginUser,
    [LOGIN_USER_SUCCESS]: loginUserSuccess,
    [LOGOUT_USER]: logoutUser,
});

export default login;