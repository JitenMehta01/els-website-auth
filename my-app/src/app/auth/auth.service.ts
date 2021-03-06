import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, catchError } from 'rxjs/operators';
import { BnNgIdleService } from 'bn-ng-idle';

import jwt_decode from 'jwt-decode';

import { environment } from '../../environments/environment';
import { UserProfile } from './user-profile';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public refreshTokenTimeout: any = null;
  public currentUser: any;

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private bnIdle: BnNgIdleService
  ) {}

  public getToken(): string {
    const token = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (token.token) {
      return token.token;
    } else {
      return '11234';
    }
  }

  public isAuthenticated(): boolean {
    const token = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (token) {
      return !this.jwtHelper.isTokenExpired(token.token);
    } else {
      return false;
    }
  }

  public lockscreen(): void {
    try {
      this.bnIdle.stopTimer();
    } catch (error) {
      console.log(error);
    }
    localStorage.removeItem('currentUser');
    this.stopRefreshTokenTimer();
  }

  public login(username: string, password: string): any {
    return this.http
      .post<any>(`${environment.apiUrl}${environment.jwtLogin}`, {
        username,
        password,
      })
      .pipe(
        map((response: any) => {
          if (response.access) {
            this.currentUser = {};
            // var currentUserDetails: any = {};
            this.currentUser = jwt_decode(response.access);
            this.currentUser.token = response.access;
            this.currentUser.refreshToken = response.refresh;
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            this.startRefreshTokenTimer(this.currentUser);
            return 'success';
          } else if (response.error) {
            return response.error;
          } else {
            return 'Something went wrong!';
          }
        }),
        catchError((error) => throwError(error || 'Something went wrong!'))
      );
  }

  public logout(): void {
    try {
      this.bnIdle.stopTimer();
    } catch (error) {
      console.log(error);
    }
    this.stopRefreshTokenTimer();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserDetails');
    localStorage.removeItem('currentUserDisplay');
    localStorage.removeItem('currentUserUnits');
    localStorage.removeItem('currentUserCompany');
  }

  public profile(): any {
    return this.http
      .get<UserProfile>(`${environment.apiUrl}/userdetails/settings`)
      .pipe(
        map((response) => {
          if (response.profile) {
            localStorage.setItem(
              'currentUserDetails',
              JSON.stringify(response.profile)
            );
            localStorage.setItem(
              'currentUserDisplay',
              JSON.stringify(response.display)
            );
            localStorage.setItem(
              'currentUserUnits',
              JSON.stringify(response.units)
            );
            localStorage.setItem(
              'currentUserCompany',
              JSON.stringify(response.company)
            );
            return response;
          } else {
            return 'failed';
          }
        }),
        catchError((error) => throwError(error || 'Something went wrong!'))
      );
  }

  public updatePassword(password: string, current_password: string): any {
    return this.http
      .post<any>(`${environment.apiUrl}/userdetails/update/password/`, {
        password,
        current_password,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error) => throwError(error || 'Something went wrong!'))
      );
  }

  private refreshToken() {
    console.log('hello');
    const token = JSON.parse(localStorage.getItem('currentUser') || '{}');
    var refresh = '1234';
    if (token.refreshToken) {
      refresh = token.refreshToken;
    }
    return this.http
      .post<any>(`${environment.apiUrl}/${environment.jwtRefresh}`, { refresh })
      .pipe(
        map((response: any) => {
          this.currentUser = {};
          var currentUserDetails: any = {};
          this.currentUser = jwt_decode(response.access);
          this.currentUser.token = response.access;
          this.currentUser.refreshToken = refresh;
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          this.refreshTokenTimeout(this.currentUser);
        }),
        catchError((error) => throwError(error || 'Something went wrong!'))
      );
  }

  private startRefreshTokenTimer(currentUser: any) {
    const expires = new Date(currentUser.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      timeout
    );
  }

  private stopRefreshTokenTimer(): void {
    clearTimeout(this.refreshTokenTimeout);
  }
}
