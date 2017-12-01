import { Routes } from '@angular/router';
import { PostViewComponent } from './post-view.component';

export const PostViewRoutes: Routes = [
  {
    path: 'post-view',
    children: [
      {
        path: ':id',
        component: <any> PostViewComponent
      }
    ]
  }
];
