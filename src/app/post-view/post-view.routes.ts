import { Routes } from '@angular/router';
import { PostViewComponent } from './post-view.component';
import { TestResolver } from './post-view.resolver';

export const PostViewRoutes: Routes = [
  {
    path: 'post-view',
    children: [
      {
        path: ':id',
        canActivate: [TestResolver],
        resolve: {
          resolver: TestResolver
        },
        component: <any> PostViewComponent
      }
    ]
  }
];
