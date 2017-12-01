import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav class="nav">
      <a [routerLink]=" ['/']" 
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Main</a>
      <a [routerLink]=" ['/category/list'] "
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Category</a>
      <a [routerLink]=" ['/search'] "
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public name = 'Angular Starter';

  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
