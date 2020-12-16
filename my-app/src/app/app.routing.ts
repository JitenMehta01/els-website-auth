
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
<<<<<<< HEAD
			 { path: 'login', component: LoginComponent },
			 { path: '**', redirectTo: '' }
=======
			 { path: 'login', component: LoginComponent}
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e
		]
	}

];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppModule {

  }
