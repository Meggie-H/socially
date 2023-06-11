import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WelcomePage } from './welcome.page';
import { WelcomeRouting } from './welcome.routing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WelcomeRouting,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
  ],
  declarations: [WelcomePage],
})
export class WelcomeModule { }