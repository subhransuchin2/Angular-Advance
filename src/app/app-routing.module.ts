import { NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CustomPreloadingStrategy } from './custom-preloading-strategy.service';
import { HelloComponent } from './hello/hello.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginService } from './login.service';
import { LoginResponse } from './login.interface';
import { HttpClient } from '@angular/common/http';

// const delayResolver = () => {
//   return of(null).pipe(delay(2000));
// };

export const loginDataResolver = (http: HttpClient) => {
  return new LoginService(http)
    .loginData('username', 'password')
    .pipe(delay(10000));
};

const authGuard = (): boolean => {
  // Check if the user is logged in
  if (!true) {
    //redirect to login page
    return false;
  }

  // Return true if the user is logged in
  return true;
};
const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    canActivate: [authGuard],
    children: [{ path: 'profile', component: ProfileComponent }],
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazy/lazy.module').then((m) => m.LazyModule),
    resolve: { loginData: loginDataResolver },
  },

  {
    path: 'pre',
    loadChildren: () =>
      import('./modules/pre/pre.module').then((m) => m.PreModule),
    data: { preload: true },
  },
  {
    path: '**',
    redirectTo: '/hello',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      preloadingStrategy: CustomPreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
