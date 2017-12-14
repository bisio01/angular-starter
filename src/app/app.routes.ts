import { RouterModule, Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { SearchComponent } from './search/search.component';
import { CategoryRoutes } from './category/category.routes';
import { MainComponent } from './main/main.component';
import { PostViewRoutes } from './post-view/post-view.routes';
import { asideRoutes } from './aside.routes';

export const ROUTES: RouterModule = [
  {
    path: '',
    component: MainComponent
  },
  ...CategoryRoutes,
  ...PostViewRoutes,
  {
    path: 'search',
    children: [
      {
        path: '',
        component: SearchComponent
      },
    ]
  },
  ...asideRoutes,

  {path: '**', component: NoContentComponent}
];
