import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ModalModule } from './../../components/modal/modal.module';

@NgModule({
  declarations: [ TableComponent ],
  imports: [
    CommonModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    ModalModule
  ],
  exports: [ TableComponent ]
})
export class TableModule { }
