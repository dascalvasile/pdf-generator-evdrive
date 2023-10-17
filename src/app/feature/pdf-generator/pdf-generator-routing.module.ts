import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { DepartmentComponent } from '@features/department/department.component';
import { DepartmentListComponent } from '@features/department/components/department-list/department-list.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,
    children: [
      {
        path: '',
        component: DepartmentListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {
}
