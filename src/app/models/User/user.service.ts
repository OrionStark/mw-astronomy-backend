import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class UserService {
  private loginApi = 'http://localhost:4322/user/login';
  private registerApi = 'http://loclhost:4322/user/register';
  constructor(private _http: Http) { }

  register( user: any ) {
    return this._http.post(this.registerApi, user);
  }

  login( username: string, password: string ) {
    return this._http.post(this.loginApi, { username, password });
  }

}
