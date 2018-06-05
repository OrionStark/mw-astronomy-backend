import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MeteoriteService {
  private API_KEY: String = 'AIzaSyAfOAoHVk4cVXbgvhd7dS0ogE3DIksufWI';
  constructor(private _http: HttpClient) { }
  getMeteoritLandings() {
    return this._http.get('https://data.nasa.gov/resource/y77d-th95.json');
  }
  getMapSatelliteImage(lat: string, long: string) {
    const urls = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat
     + ',' + long + '&zoom=12&size=246x246&maptype=satellite&key=' + this.API_KEY;
     return urls;
  }
}
