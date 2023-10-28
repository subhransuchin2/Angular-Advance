import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from './ngrx.action';
import { LoginState } from '../login.interface';

export const initialState: LoginState = {
  userId: null,
  username: 'fakeuser',
  oldUsername: null,
  tokenFromBe: 'faketoken',
};

export const loginReducer = createReducer(
  initialState,
  // login reducer
  on(LoginActions.loginSuccess, (state, { responseData }) => {
    return {
      ...state,
      tokenFromBe: responseData.token,
      userId: responseData.userid,
    };
  }),
  on(LoginActions.logout, (state, {}) => ({ ...state, ...initialState }))
);

export function ngrxReducer(state: LoginState | undefined, action: Action) {
  return loginReducer(state, action);
}
