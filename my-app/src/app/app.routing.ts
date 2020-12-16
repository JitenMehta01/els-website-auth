
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';



export const AppRoutes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			 { path: '', redirectTo: '/home', pathMatch: 'full'},
			 { path: 'home', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
			 { path: 'login', component: LoginComponent },
			 { path: '**', redirectTo: '' }
		]
	}

];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppModule {

  }
