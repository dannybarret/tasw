import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { InputModule } from './../../components/input/input.module';
import { ButtonModule } from './../../components/button/button.module';
import { ToastModule } from './../../components/toast/toast.module';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    ToastModule
  ]
})
export class LoginModule { }
