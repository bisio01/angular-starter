import { Component, Input, OnInit, Output } from '@angular/core';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'top-list',
  templateUrl: './top-list.template.html'
})

export class TopListComponent implements OnInit {
  @Input()
  public set category(categoryValue) {
    console.log(categoryValue);
    this.loadList(categoryValue);
  }

  public result;
  public resultItems;

  constructor(private mainService: MainService) {
  }

  public loadList(category) {

    this.mainService.getList(category).subscribe((res) => {
      this.result = res.response;
      this.resultItems = res.response.results;

      console.log(this.result);
      console.log(this.resultItems);
    });
  }

  public ngOnInit() {

  }


}
