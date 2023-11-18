import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { TeachersdMaterialModule } from '@app/shared/materials/teachers-material.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersdMaterialModule,
    SharedModule
  ]
})
export class TeachersModule { }
