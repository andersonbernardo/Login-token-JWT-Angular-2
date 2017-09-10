import { LoginService } from './../account/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Token } from '../account/login/model/Token';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | Observable<boolean> {
                const isLoggedIn = this.loginService.isLoggedIn();
                if (!isLoggedIn) {
                    this.loginService.logout();
                }
                return isLoggedIn;
  }

  constructor(private loginService: LoginService, private router: Router) { }

}
