import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { Navbar1Component } from '../sharedPages/navbar1/navbar1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [


    Navbar1Component
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  exports: [
    Navbar1Component
  ]
})
export class LoginModule { }
