import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';

import { User } from './model/user';
import { Token } from './model/token';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  private user: User = new User();
  private token: Token = new Token();
  alertError = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
      if (this.loginService.isLoggedIn) {
        this.router.navigate(['/products']);
      }
  }

  Login(): void {
      this.loginService.getToken(this.user).subscribe(token => {
          this.token = token;
      }, error => { this.alertError = true; });
  }
}
