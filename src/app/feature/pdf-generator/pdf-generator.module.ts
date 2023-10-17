import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DepartmentComponent } from '@features/department/department.component';
import { DepartmentRoutingModule } from '@features/department/department-routing.module';
import { DepartmentListComponent } from '@features/department/components/department-list/department-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentListComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    DepartmentRoutingModule,
    ReactiveFormsModule

  ]
})
export class DepartmentModule {
}
