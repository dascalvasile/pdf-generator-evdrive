import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import {PdfGeneratorComponent} from "./pdf-generator.component";
import {PdfFormComponent} from "./pdf-form/pdf-form.component";

const routes: Routes = [
  {
    path: '',
    component: PdfGeneratorComponent,
    children: [
      {
        path: '',
        component: PdfFormComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfGeneratorRoutingModule {
}
