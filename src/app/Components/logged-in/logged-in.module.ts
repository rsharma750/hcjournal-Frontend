import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/Angular Material/material.module';
import { LoggedInComponent } from './logged-in.component';
import { AdminComponent } from './admin/admin.component';
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { SharedComponent } from './shared/shared.component';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    LoggedInComponent,
    AdminComponent,
    SharedComponent,
    UserComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  LoggedInRoutingModule

  
  ],
  entryComponents: [
  
  ],
  providers: [
   
    // {provide: LOCALE_ID, useValue: 'en-US'}
  ]
})

export class LoggedInModule { }
