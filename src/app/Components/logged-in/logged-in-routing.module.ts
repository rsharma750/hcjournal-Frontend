import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
      path: '', component: LoggedInComponent, children: [
        { path: 'admin', component: AdminComponent },
     
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoggedInRoutingModule { }