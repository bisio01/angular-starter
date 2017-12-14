import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { NoContentComponent } from './no-content';
import '../styles/styles.scss';
import '../styles/headings.css';
import { SearchComponent } from './search/search.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryService } from './category/category.service';
import { PaginationComponent } from './component/pagination/pagination.component';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main.service';
import { TopListComponent } from './component/top-list/top-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostViewService } from './post-view/post-view.service';
import { AdvancedSearchService } from './search/search.service';
import { ContactFormComponent } from './component/contact-modal/contact-modal.component';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({

  declarations: [
    AppComponent,
    CategoryListComponent,
    SearchComponent,
    NoContentComponent,
    PaginationComponent,
    TopListComponent,
    MainComponent,
    PostViewComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(<any> ROUTES, {enableTracing: true}),
  ],
  providers: [
    APP_PROVIDERS,
    CategoryService,
    MainService,
    PostViewService,
    AdvancedSearchService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
