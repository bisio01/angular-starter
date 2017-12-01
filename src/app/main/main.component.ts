import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'main',
  templateUrl: 'main.template.html'
})
export class MainComponent implements OnInit {
  public result: any = {};
  public limits: 10;
  public category: any = [
    {
      categoryValue: 'sport'
    },
    {
      categoryValue: 'technology'
    },
    {
      categoryValue: 'pictures'
    },
    {
      categoryValue: 'music'
    }
  ];

  constructor() {
  }

  public ngOnInit() {
  }
}
