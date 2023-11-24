import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomMatPaginatorPtBr } from '../pagination/custom-mat-paginator-ptbr';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  declarations: [],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorPtBr }
  ]
})
export class CoursesdMaterialModule { }
