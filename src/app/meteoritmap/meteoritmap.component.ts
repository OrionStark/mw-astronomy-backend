import { Component, OnInit } from '@angular/core';
import { MeteoriteService } from '../services/meteorite.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-meteoritmap',
  templateUrl: './meteoritmap.component.html',
  styleUrls: ['./meteoritmap.component.scss']
})
export class MeteoritmapComponent implements OnInit {
  private title: String = 'Arizona Land';
  private lat = 3.597031;
  private lon = 98.678513;
  private meteorit_data: any;
  private mass_chart = [];
  private zoneName = [];
  private mass = [];
  constructor( private _meteoriteService: MeteoriteService ) { }

  ngOnInit() {
    this._meteoriteService.getMeteoritLandings().subscribe(
      res => {
        this.meteorit_data = res;
        for ( let i = 0; i < this.meteorit_data.length; i++ ) {
          this.meteorit_data[i].reclat = parseFloat(this.meteorit_data[i].reclat);
          this.meteorit_data[i].reclong = parseFloat(this.meteorit_data[i].reclong);
        }
      },
      err => {
        console.log(err);
      },
      () => {
      }
    );
  }

  getStaticMapImage(lat: number, long: number) {
    return this._meteoriteService.getMapSatelliteImage(lat.toString(), long.toString());
  }

}
