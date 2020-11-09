import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from './../../components/button/button.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ ModalComponent ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
    MatButtonModule
  ],
  exports: [ ModalComponent ]
})
export class ModalModule { }
