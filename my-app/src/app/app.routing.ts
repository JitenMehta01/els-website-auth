import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			 { path: '', redirectTo: 'home', pathMatch: 'full'},
			 { path: 'home', component: IndexComponent },
			 { path: 'login', component: LoginComponent }
		]
	}

]

export class AppModule { }
