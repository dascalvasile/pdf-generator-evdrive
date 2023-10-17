import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FooterComponent} from './componets/footer/footer.component';
import {HeaderComponent} from './componets/header/header.component';
import {LayoutComponent} from './componets/layout/layout.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {SidebarComponent} from './componets/sidebar/sidebar.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,


  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandler},

  ],
  exports: [],
})
export class CoreModule {

}
