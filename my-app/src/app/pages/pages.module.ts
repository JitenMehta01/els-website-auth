import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesRoutes } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { ProgressBarComponent } from './index/progress-bar/progress-bar.component';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';



@NgModule({
  declarations: [
  	IndexComponent,
  	ProgressBarComponent,
  	UserLoggedInComponent,
	],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule
  ]
})
export class PagesModule { }
