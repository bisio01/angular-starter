import { RouterModule, Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { SearchComponent } from './search/search.component';
import { CategoryRoutes } from './category/category.routes';
import { MainComponent } from './main/main.component';

export const ROUTES: RouterModule = [
  {
    path: '',
    component: MainComponent
  },
  ...CategoryRoutes,
  {
    path: 'search',
    component: SearchComponent
  },
  {path: '**', component: NoContentComponent}
];
