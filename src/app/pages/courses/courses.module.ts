import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoursesdMaterialModule } from '@app/shared/materials/courses-material.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesdMaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
