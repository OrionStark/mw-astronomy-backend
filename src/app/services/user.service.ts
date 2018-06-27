import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserServices {
  constructor( private _http: HttpClient ) {}
  login(user_data: any) {
    return this._http.post('http://localhost:4322/user/login', user_data);
  }
  register(user_data: any) {
    return this._http.post('http://localhost:4322/user/register', user_data);
  }
}
