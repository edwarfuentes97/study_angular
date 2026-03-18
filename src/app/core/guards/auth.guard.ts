import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// TODO: Practice — connect this to a real AuthService
export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Simulated: always allow access (flip to false to test guard redirect)
  const isAuthenticated = true;

  if (!isAuthenticated) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
