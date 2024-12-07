import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { LoginComponent } from './authPages/login/login.component';
import { SigninComponent } from './authPages/signin/signin.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashBoardComponent,
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  // { path: '**', redirectTo: '/app' },
];
