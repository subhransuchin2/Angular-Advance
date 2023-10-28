import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import * as LoginActions from './ngrx.action';
import { LoginService } from '../login.service';
import { LoginResponse } from '../login.interface';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((actionData) => {
        return this.loginService
          .loginData(actionData.payload.username, actionData.payload.password)
          .pipe(
            map((response: LoginResponse) => {
              return LoginActions.loginSuccess({
                responseData: {
                  username: 'Hello',
                  token: response.tokenCheck,
                  userid: response.userId,
                },
              });
            }),
            catchError((error: unknown) => {
              return of(LoginActions.loginFailure({ errorMsg: '' }));
            })
          );
      })
    );
  });

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      tap(() => console.log('')),
      catchError((error: unknown) => {
        return of(LoginActions.loginFailure({ errorMsg: '' }));
      })
    )
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    return String(error);
  }
}
