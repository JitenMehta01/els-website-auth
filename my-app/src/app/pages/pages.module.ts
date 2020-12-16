import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e

import { PagesRoutes } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { ProgressBarComponent } from './index/progress-bar/progress-bar.component';
<<<<<<< HEAD
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';
=======
import { UserLoginComponent } from './user-login/user-login.component';
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e



@NgModule({
  declarations: [
  	IndexComponent,
  	ProgressBarComponent,
<<<<<<< HEAD
  	UserLoggedInComponent,
=======
  	UserLoginComponent,
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e
	],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule
  ]
})
export class PagesModule { }
