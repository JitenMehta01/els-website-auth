import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PagesRoutes } from './pages.routing';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
  	IndexComponent,
	],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
  ]
})
export class PagesModule { }
