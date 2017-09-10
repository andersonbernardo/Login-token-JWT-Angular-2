import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './login/model/User';
import { Token } from './login/model/Token';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {
  private host = 'http://localhost:58686'; /* to Global Variables  */

  private _loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loggedIn: Observable<boolean> = this._loggedIn.asObservable();

  constructor(private http: Http, private router: Router) { }

  getToken(user: User): Observable<Token> {
    const url = `${this.host}/api/token`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({ headers: headers });

    return this.http.post(url, user, options)
                    .map((res: Response) => {
                        const token: Token = res.json();
                        if (token) {
                          localStorage.setItem('token', token.token);
                          this.router.navigate(['/products']);
                          return token;
                      }
                    })
                    .catch((error: any) => {
                        this.logout();
                        return Observable.throw(error);
                    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
    this._loggedIn.next(false);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');

    // tslint:disable-next-line:curly
    if (token)
      this._loggedIn.next(true);
    // tslint:disable-next-line:curly
    else
      this._loggedIn.next(false);

    return this._loggedIn.getValue();
  }
}

