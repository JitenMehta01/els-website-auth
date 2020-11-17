import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'

export const AppRoutes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			 { path: '', redirectTo: '/home', pathMatch: 'full'},
			 { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
		]
	}

]
