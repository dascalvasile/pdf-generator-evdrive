import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "@core/componets/layout/layout.component";
import {environment} from "./environments/environment";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: "pdf-generator",
            loadChildren: () => import('../app/feature/pdf-generator/pdf-generator.module').then(m => m.PdfGeneratorModule)
          }
        ]
      }
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: environment.enableTracing && !environment.production
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
