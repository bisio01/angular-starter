import { Routes } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { ContactFormComponent } from './component/contact-modal/contact-modal.component';

export const asideRoutes: Routes = [
  {
    path: 'post-view/:id',
    outlet: 'aside',
    component: PostViewComponent,
  },
  {
    path: 'contact',
    outlet: 'aside',
    component: ContactFormComponent
  }
];
