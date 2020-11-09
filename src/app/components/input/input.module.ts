import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ InputComponent ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [ InputComponent ]
})
export class InputModule { }
