import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarModule } from 'ng-sidebar';
<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';

import { JwtInterceptor} from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { appInitializer } from './_helpers/app.initializer';
import { AuthenticationService } from './_services/authentication.service';
=======
import { UserLoginComponent } from 'pages/login/user-login/user-login.copmponent';
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes), 
    SidebarModule.forRoot(), 
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    FormsModule
>>>>>>> 367d33d4c52dc25a8f89d5cada078856fe69177e
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
