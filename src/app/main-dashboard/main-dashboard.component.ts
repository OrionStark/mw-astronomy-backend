import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { NeoServices } from '../services/neo.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit, OnDestroy {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  socket: SocketIOClient.Socket;

  sub: any = null;

  sunsInformation: any;

  weeklyNeoDataset = {
    date: [],
    value: [],
    hazardous_value: []
  };

  chart = [];
  hazard_chart = [];

  constructor(private _neoServices: NeoServices) {}

  ngOnInit() {
    this.getTodayNeo();
    this.getWeeklyNeo();
    this.socket = io.connect('http://localhost:4322/sun');
    console.log(localStorage.getItem('name'));
    this.socket.emit('get.sun.informations', {
      user: localStorage.getItem('name')
    });
    this.socket.on('sunsdata', (data: any) => {
      this.sunsInformation = data;
      this.socket.emit('get.sun.informations', {user: localStorage.getItem('name')});
    });
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }

  getFirstDateofWeek(_date) {
    const day = _date.getDay() || 7;
    if ( day !== 1 ) {
        _date.setHours( -24 * ( day - 1 ) );
    }
    return _date;
  }

  getWeeklyNeo() {
    let _first_date = this.getFirstDateofWeek(new Date());
    const tmp = new Date(_first_date);
    const _last_date = new Date(tmp.setTime(_first_date.getTime() + ( 86400000 * 6)));
    this._neoServices.getNeobyDate(
      localStorage.getItem('token'),
      _first_date.toString(),
      _last_date.toString()
    ).subscribe(data => {
      let count = 0;
      let hazardous_tmp = 0;
      for ( let i = 0; i < 7; i++ ) {
        _first_date = new Date(_first_date.setDate(_first_date.getDate() + count));
        this.weeklyNeoDataset.date.push(this.getDateFormat(_first_date));
        this.weeklyNeoDataset.value.push(data['near_earth_objects'][this.getDateFormat(_first_date).toString()].length);
        for ( let j = 0; j < data['near_earth_objects'][this.getDateFormat(_first_date).toString()].length; j++ ) {
          if ( data['near_earth_objects'][this.getDateFormat(_first_date).toString()][j].is_potentially_hazardous_asteroid ) {
            hazardous_tmp += 1;
          }
        }
        this.weeklyNeoDataset.hazardous_value.push(hazardous_tmp);
        count = 1;
        hazardous_tmp = 0;
      }
      this.createWeeklyChart();
      this.createHazardousChart();
    }, err => {
      console.log(err);
    });
  }

  getTodayNeo() {
    this._neoServices.getTodayNeo(localStorage.getItem('token'))
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
  }

  createWeeklyChart() {
    this.chart = new Chart('weekly_chart', {
      type: 'line',
      data: {
        labels: this.weeklyNeoDataset.date,
        datasets: [{
          label: 'Objects count',
          data: this.weeklyNeoDataset.value,
          borderColor: '#01579B',
          fill: true,
        }],
        options: {
          legend: {
            display: true,
            label: {
              text: 'Objects count'
            }
          },
          animation: {
            duration: 500,
        },
        hover: {
            animationDuration: 200,
        },
        responsiveAnimationDuration: 500,
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                fontSize: 9
              }
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      }
    });
  }

  createHazardousChart() {
    this.hazard_chart = new Chart('weekly_hazardous_chart', {
      type: 'line',
      data: {
        labels: this.weeklyNeoDataset.date,
        datasets: [{
          label: 'Objects count',
          data: this.weeklyNeoDataset.hazardous_value,
          borderColor: '#F44336',
          fill: true,
        }],
        options: {
          legend: {
            display: true,
            label: {
              text: 'Objects count'
            }
          },
          animation: {
            duration: 500,
        },
        hover: {
            animationDuration: 200,
        },
        responsiveAnimationDuration: 500,
          scales: {
            xAxes: [{
              display: true,
              ticks: {
                fontSize: 9
              }
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      }
    });
  }

  getDateFormat(date) {
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
}
