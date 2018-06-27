import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeoServices } from '../services/neo.service';

@Component({
  selector: 'app-weeklyneo',
  templateUrl: './weeklyneo.component.html',
  styleUrls: ['./weeklyneo.component.scss']
})
export class WeeklyneoComponent implements OnInit {

  spinner_visible: Boolean = false;
  content_visible: Boolean = false;
  neo: any;
  constructor(private _router: Router, private _neoServices: NeoServices) { }

  ngOnInit() {
    this.getNeo();
  }

  getNeo() {
    this.spinner_visible = true;
    this.content_visible = false;
    const _first_date = this.getFirstDateofWeek(new Date());
    const tmp = new Date(_first_date);
    const _last_date = new Date(tmp.setTime(_first_date.getTime() + ( 86400000 * 6)));
    this._neoServices.getNeobyDate(localStorage.getItem('token'), _first_date.toString(), _last_date.toString())
      .subscribe(response => {
        console.log(response);
        this.neo = response['near_earth_objects'];
        // tslint:disable-next-line:no-shadowed-variable
        const tmp = [];
        const sec_tmp = [];
        const curr_date = new Date();
        let date = this.getFirstDateofWeek(new Date());
        let count = 0;
        for ( let i = 0; i < 7; i++ ) {
          date = new Date(date.setDate(date.getDate() + count));
          tmp.push(response['near_earth_objects'][this.getDateFormat(date)]);
          count = 1;
        }
        for ( let i = 0; i < tmp.length; i++ ) {
          for ( let j = 0; j < tmp[i].length; j++ ) {
            sec_tmp.push(tmp[i][j]);
          }
        }
        this.neo = sec_tmp;
        this.spinner_visible = false;
        this.content_visible = true;
      }, err => {
        console.log(err);
        this.spinner_visible = false;
        this.content_visible = true;
      });
  }

  getDateFormat(date): string {
    let month = '' + ( date.getMonth() + 1 );
    let day = '' + date.getDate();
    const year = '' + date.getFullYear();
    if ( month.length < 2 ) {
      month = '0' + month;
    }
    if ( day.length < 2 ) {
      day = '0' + day;
    }

    return [ year, month, day ].join('-');
  }

  getFirstDateofWeek(_date) {
    const day = _date.getDay() || 7;
    if ( day !== 1 ) {
        _date.setHours( -24 * ( day - 1 ) );
    }
    return _date;
  }

}
