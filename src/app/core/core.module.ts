import { ErrorHandler, isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FooterComponent } from '@core/componets/footer/footer.component';
import { LayoutComponent } from '@core/componets/layout/layout.component';
import { HeaderComponent } from '@core/componets/header/header.component';
import { HorizontalMenuComponent } from '@core/componets/horizontal-menu/horizontal-menu.component';
import { environment } from '@environments/environment';
import { LoginPageComponent } from '@core/componets/login-page/login-page.component';

import { NgZorroModule } from '@shared/ng-zorro.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from '@core/store/app-store/app-store.reducers';
import { appEffects } from '@core/store/app-store/app-store.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { ChangePasswordComponent } from './componets/change-password/change-password.component';
import { LoadingInterceptor } from '@core/interceptors/loading.interceptor';


@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    LoginPageComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //Ngrx
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects), //To add appEffects
    StoreDevtoolsModule.instrument({logOnly: !isDevMode(), autoPause: true}),

    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(
          http,
          './assets/i18n/',
          `.json?v=${environment.appVersion}`,
        ),
        deps: [HttpClient],
      },
    }),
    RouterOutlet,
    RouterLink,
    NgZorroModule,
    ReactiveFormsModule,
    NzNoAnimationModule

  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  exports: [],
})
export class CoreModule {

}
