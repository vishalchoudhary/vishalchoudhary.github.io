import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authService.isAuthenticated() || this.router.navigate(["/"]) || false;
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    // return this.authService.isAuthenticated() || this.router.navigate(["/"]) || false;
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
