import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeoServices } from '../services/neo.service';

@Component({
  selector: 'app-neo-today',
  templateUrl: './neo-today.component.html',
  styleUrls: ['./neo-today.component.scss']
})
export class NeoTodayComponent implements OnInit {
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
    this._neoServices.getTodayNeo(localStorage.getItem('token'))
      .subscribe(response => {
        console.log(response);
        this.neo = response['near_earth_objects'];
        this.spinner_visible = false;
        this.content_visible = true;
      }, err => {
        console.log(err);
        this.spinner_visible = false;
        this.content_visible = true;
      });
  }
}
