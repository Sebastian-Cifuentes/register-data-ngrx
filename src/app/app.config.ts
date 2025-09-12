import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userFeatureKey, userReducer } from './state/reducers/users.reducers';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UsersEffects } from './state/effects/users.effect';
import { EXPORT_STRATEGIES, strategies } from './share/export';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore(),
    provideState({name: userFeatureKey, reducer: userReducer}),
    provideEffects(UsersEffects),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
    }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom([BrowserAnimationsModule]),
    { provide: EXPORT_STRATEGIES, useValue: strategies }
  ],
};
