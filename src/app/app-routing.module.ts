import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'posts',
    canActivate: [AdminGuard],
    component: PostsComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
