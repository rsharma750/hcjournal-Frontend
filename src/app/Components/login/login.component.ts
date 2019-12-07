import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { UserManagementService } from 'src/app/Services/user-management.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  group: number;
  constructor(private router: Router, private logInService: UserManagementService, private snackBar: MatSnackBar ) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

   }

  ngOnInit() {
  }
  password(){
    this.router.navigate(['/forgot-password']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  onSubmit() {
    // debugger
    this.router.navigate(['/dashboard']);
    let data = {
      email: this.signInForm.controls['email'].value,
      password: this.signInForm.controls['password'].value
    };
 
    this.logInService.logIn(data).subscribe(
      res => {
         this.group = res['data'].group;
        //  if(this.group == 2){
        //   this.router.navigate(['/placement']);
        //  }
        //  else{
        //   this.router.navigate(['/adminDashboard']);
        //  }
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err)
        if (err) {
          this.snackBar.openFromComponent(ErrorComponent, {
            duration: 2000,
            data: 'Your Email or Password is wrong'
          });
        };
      }
    );
  }
}
