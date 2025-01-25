import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // تأكد من أن هذا موجود
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';  // تأكد من استيراده هنا

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),  // إضافة HttpClientModule هنا
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
  ],
};
