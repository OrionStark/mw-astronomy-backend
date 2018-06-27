import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    if ( localStorage.getItem('token') ) {
      this._router.navigate(['dashboard']);
    }
  }

  onRegisterClicked() {
    this._router.navigate(['/register']);
  }

  onLoginClicked() {
    this._router.navigate(['/login']);
  }

}
