import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryViewComponent } from './category-view/category-view.component';

export const CategoryRoutes: Routes = [
  {
    path: 'category',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            component: <any> CategoryListComponent
          }
        ]
      },
      {
        path: 'view',
        children: [
          {
            path: '',
            component: <any> CategoryViewComponent
          }
        ]
      }
    ]
  }
];
