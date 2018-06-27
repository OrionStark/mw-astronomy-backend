import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if ( !this._auth.isAuthenticated() ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
