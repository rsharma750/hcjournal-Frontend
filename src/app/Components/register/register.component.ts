import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../../Services/user-management.service'
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ErrorComponent } from '../login/error/error.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm : FormGroup;
  constructor(private register:UserManagementService,  private router:Router,private snackBar: MatSnackBar) { 
    this.registerForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      address :new FormControl('', Validators.required),
      country : new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required), 
      phone:new FormControl('', Validators.required), 
      // cPassword: new FormControl('', Validators.required),
      // username :new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    
  }
  backToLogin(){
    this.router.navigate(['/login']);
  }
  onRegister() {
    debugger
    this.router.navigate(['/login']);
    // let data = {
    //   first_name: this.registerForm.controls['first_name'].value,
    //   email: this.registerForm.controls['email'].value,
    //   password: this.registerForm.controls['password'].value
    // };

    // if (this.registerForm.controls['password'].value == this.registerForm.controls['cPassword'].value) {
    //   this.register.register(data).subscribe(
    //     res => {
    //       this.router.navigate(['/login']);
    //       console.log(data)
    //     },
    //     err => {
    //       this.snackBar.openFromComponent(ErrorComponent, {
    //         duration: 2000,
    //         data: err.message
    //       });
    //     }
    //   );
    // }
    // else {
    //   this.snackBar.openFromComponent(ErrorComponent, {
    //     duration: 2000,
    //     data: "Your Password didn't match Confirm Password"
    //   });
    // }

  };
}
