import { HttpInterceptorFn } from '@angular/common/http';
import { TokenServiceService } from '../../shared/services/token/token-service.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenServiceService);
  const token = tokenService.getToken();

  if (token) {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(newReq);
  }

  return next(req);
};
