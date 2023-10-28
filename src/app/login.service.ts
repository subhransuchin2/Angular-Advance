import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = 'to-do';

  constructor(private http: HttpClient) {}

  loginData(username: string, password: string): Observable<LoginResponse> {
    return of({
      userId: 'fgdfg',
      tokenCheck: 'dfgdfgdfgdfg',
    });
  }
}
