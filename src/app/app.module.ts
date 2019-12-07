import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { MaterialModule } from './Angular Material/material.module';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ErrorComponent } from './Components/login/error/error.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TokenInterceptor, HttpErrorInterceptorService } from './MIddleWares/token.interceptor';
import { DashboardComponent } from './Components/login/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    ErrorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,ReactiveFormsModule,FormsModule,
    HttpClientModule
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    },
  ],
  entryComponents: [
    ErrorComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
