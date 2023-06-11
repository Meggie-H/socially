import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginRouting } from './login.routing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRouting,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  declarations: [LoginPage],
})
export class LoginModule { }