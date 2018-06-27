import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NeoServices {
  baseUrl: String = 'http://localhost:4322';
  NeoToday: string = this.baseUrl + '/nasa/neo/today';
  constructor(private _http: HttpClient) {}
  getTodayNeo(token: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this._http.get(this.NeoToday, requestOptions);
  }

  getNeobyDate(token: string, start_date: string, end_date: string) {
    const url = this.baseUrl + '/nasa/neo/bydate/' + start_date + '/' + end_date;
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return this._http.get(url, requestOptions);
  }
}
