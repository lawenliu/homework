import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import{ Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * UserService manages our current user
 */
@Injectable()
export class EmailService {
  constructor(private _http: Http) {}

  sendEmail(email: string){
    var url = 'http://sendemailnow.azurewebsites.net/api/values'
    let headers = new Headers({ 'Content-Type': 'text/json' });
    let options = new RequestOptions({ headers: headers });
    var result = this._http.post(url, "\"" + email + "\"", options)
              .map( res => res.json());
    return result;
  }
}