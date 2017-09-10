import { LoginService } from './../account/login.service';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Products } from './model/Products';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductsService {
  private host = 'http://localhost:58686'; /* to Global Variables  */
  constructor(private http: Http, private logiService: LoginService) { }

  getProducts(): Observable<Products[]> {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.host}/api/products`, options).map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  private  extractData(res: Response | any) {
    const data = res.json();
    return data || {};
  }

  public  handleErrorObservable(error: Response | any) {
    return Observable.throw(error);
  }
}
