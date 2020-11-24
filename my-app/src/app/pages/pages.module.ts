import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PagesRoutes } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { ProgressBarComponent } from './index/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
  	IndexComponent,
  	ProgressBarComponent,
	],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
  ]
})
export class PagesModule { }
