import { CanActivateChildFn, Router } from '@angular/router';
import { LoginService } from '../../shared/services/auth/login.service';
import { inject } from '@angular/core';
import { ICheckLogin } from '../../shared/models/auth/login';

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const loginService = inject(LoginService);
  const route = inject(Router);

  let isAuth: boolean = false;

  loginService.checkLogin().subscribe((res: ICheckLogin) => {
    isAuth = res.valid;
  });
  if (!isAuth) route.navigate(['/login']);
  return isAuth;
};
