import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // TODO: Practice — add a real auth token from a service
  const token = 'fake-jwt-token-for-demo';

  const authReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });

  console.log(`[AuthInterceptor] ${req.method} ${req.url}`);
  return next(authReq);
};
