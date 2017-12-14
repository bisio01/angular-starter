import { Routes } from '@angular/router';
import { PostViewComponent } from './post-view.component';
import { TestResolver } from './post-view.resolver';

export const PostViewRoutes: Routes = [
  {
    path: 'view',
    children: [
      {
        path: ':id',
        component: <any> PostViewComponent
      }
    ]
  }
];
