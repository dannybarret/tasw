import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { HeaderModule } from './../../components/header/header.module';
import { InputModule } from './../../components/input/input.module';
import { TableModule } from './../../components/table/table.module';

@NgModule({
  declarations: [ PostsComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    InputModule,
    TableModule
  ]
})
export class PostsModule { }
