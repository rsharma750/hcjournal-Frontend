import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        });

        return next.handle(req);
    }
}

@Injectable({
    providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {
    returnUrl: string;

    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    const error = err.error.message || err.statusText;
                    window.localStorage.clear();
                    this.router.navigate(['/logIn']);
                }
                return this.handleError(err);
            }));
    }

    public handleError(error: HttpErrorResponse) {
        let errMsg = error.error
            ? error.error['message']
            : error.status
                ? `${error.status} - ${error.statusText}`
                : 'Server error';
        return throwError(errMsg);
    }
}
