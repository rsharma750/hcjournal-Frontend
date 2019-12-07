import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
  
  constructor(private router: Router, private snackbar: MatSnackBar) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('token')) {
      return of(true);
    }
    else {
      this.router.navigate(['/logIn']);
      return of(false);
    }
  }

}
