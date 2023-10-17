import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfGeneratorComponent} from "./pdf-generator.component";
import {RouterOutlet} from "@angular/router";
import { PdfFormComponent } from './pdf-form/pdf-form.component';
import {PdfGeneratorRoutingModule} from "./pdf-generator-routing.module";


@NgModule({
  declarations: [
    PdfGeneratorComponent,
    PdfFormComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    PdfGeneratorRoutingModule,
    FormsModule,



  ]
})
export class PdfGeneratorModule {
}
