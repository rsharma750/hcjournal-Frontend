import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserManagementService {

  constructor(private http:HttpClient) { }

  register(data) {

    return this.http.post(`${environment.API_url}/account/register`, data).pipe(
      map(res => true),
      catchError((err) => {
         console.log(err)
        return throwError(err.error);
      })
    );
  }
  userName = '';
  group: number;

  logIn(data) {

    return this.http.post(`${environment.API_url}/account/login/`, data).pipe(
      map((res) => {
        console.log('Data...',res)
        this.userName = res['data'].name;
        console.log(this.userName)
        this.group = res['data'].group;
        console.log(this.group)
        localStorage.setItem('token', res['data'].token);
        localStorage.setItem('group', res['data'].group);
       return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    )
  }
}
