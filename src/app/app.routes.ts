import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

export const routes: Routes = [
  {
    path: 'app',
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
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '**', redirectTo: '/app' },
];
