import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private modalLogin: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public loginModal: Observable<any> = this.modalLogin.asObservable();

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.auth.isAuthenticated()) {
      if (this.auth.getToken() == '') {
        this.router.navigate(['/authentication/login'], {
          queryParams: { returnUrl: state.url },
        });
        return false;
      } else {
        this.modalLogin.next(true);
      }
    }
    return true;
  }

  changeModal() {
    this.modalLogin.next(false);
  }
}
