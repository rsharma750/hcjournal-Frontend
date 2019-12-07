import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './MIddleWares/auth.guard';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Components/login/dashboard/dashboard.component';
//import { AuthGuard } from './Middlewares/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent},
  {
    path: '',
    loadChildren: () => import('./Components/logged-in/logged-in.module').then(mod => mod.LoggedInModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
