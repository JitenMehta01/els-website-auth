import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from "./layout.component";
import { SidebarModule } from 'ng-sidebar';


@NgModule({
  declarations: [
    LayoutComponent
	],
  imports: [
    SidebarModule.forRoot()]
})
export class layoutModule { }
