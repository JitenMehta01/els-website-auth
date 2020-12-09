import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { IndexComponent } from './index/index.component';

export const PagesRoutes: Routes = [
		{
        	path: '',
        	component: IndexComponent,
        	data: {
          		title: 'Welcome to ELS',
        	}
    	}
	]

	export class AppComponent {
		faCoffee = faCoffee;
	  }	