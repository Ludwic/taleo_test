import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditorComponent } from './post-editor/post-editor.component';

const routes: Routes = [
  { 
    path: 'posts',
    component: PostListComponent,
  },
  { 
    path: 'posts/:Id',
    component: PostEditorComponent,
  },
  { 
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
