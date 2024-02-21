import { NgModule } from '@angular/core';
import { AuthModule, AuthHttpInterceptor, AuthGuard } from '@auth0/auth0-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'krsna23.us.auth0.com',
      clientId: 'COPcR44pB9VHe0jKGGUbuKDvICBsLhXV',
      cacheLocation: 'localstorage'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}