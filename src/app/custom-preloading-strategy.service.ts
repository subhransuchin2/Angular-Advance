import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  preload(route: Route, load: () => Observable<any>) {
    // pre-load a module when the user redirects to a specific route. it works after the resolve
    const shouldPreload =
      route?.data?.['preload'] &&
      isPlatformBrowser(this.platformId) &&
      location.href?.includes('lazy');
    return shouldPreload ? timer(2000).pipe(switchMap(load)) : EMPTY;
  }
}
