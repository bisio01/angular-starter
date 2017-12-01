import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { CategoryService } from './category/category.service';
import { PaginationComponent } from './component/pagination/pagination.component';
import { MainComponent } from './main/main.component';
import { MainService } from './main/main.service';
import { TopListComponent } from './component/top-list/top-list.component';

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
    CategoryViewComponent,
    SearchComponent,
    NoContentComponent,
    PaginationComponent,
    TopListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(<any> ROUTES),
  ],
  providers: [
    APP_PROVIDERS,
    CategoryService,
    MainService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
