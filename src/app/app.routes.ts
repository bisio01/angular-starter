import { RouterModule, Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { SearchComponent } from './search/search.component';
import { CategoryRoutes } from './category/category.routes';

export const ROUTES: RouterModule = [
/*  {
    path: '',
    component:

  }*/
  ...CategoryRoutes,
  {
    path: 'search',
    component: SearchComponent
  },
  {path: '**', component: NoContentComponent}
];
