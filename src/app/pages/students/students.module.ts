import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsdMaterialModule } from '@app/shared/materials/students-material.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsdMaterialModule,
    SharedModule
  ]
})
export class StudentsModule { }
