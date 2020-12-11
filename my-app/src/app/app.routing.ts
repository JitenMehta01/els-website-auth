import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';



export const AppRoutes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			 { path: '', redirectTo: '/home', pathMatch: 'full'},
			 { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
			 { path: 'login', component: LoginComponent }
		]
	}

]

export class AppModule {

  }
