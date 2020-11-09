import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './pages/login/login.module';
import { PostsModule } from './pages/posts/posts.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    PostsModule,
    HttpClientModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
