import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ payload: { username: string; password: string } }>()
);

export const loginSuccess = createAction(
  '[Login API] Login Success',
  props<{ responseData: { username: string; token: string; userid: string } }>()
);

export const loginFailure = createAction(
  '[Login API] Login Failure',
  props<{ errorMsg: string }>()
);
export const logout = createAction('[Login] Logout');
