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
      <a [routerLink]=" ['/category/list', {outlets: {aside: null}}] "
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" >Category</a>
      <a [routerLink]=" ['/search', {outlets: {aside: null}}] "
         routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Advansed search</a>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
    <div>
      <router-outlet name="aside"></router-outlet>
    </div>
    <footer>
      <a [routerLink]="[{outlets: {aside: ['contact']}}]">Contact</a>
    </footer>
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
