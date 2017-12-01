import { Component, Input, OnInit, Output } from '@angular/core';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'top-list',
  templateUrl: './top-list.template.html'
})

export class TopListComponent implements OnInit {

  @Input() public category;
  @Output() public result;

  constructor(private mainService: MainService){
    console.log(this.category);
  }

  public loadList(category) {
    console.log(category);
    this.mainService.getList(category).subscribe((res) => {
      this.result = res;
      console.log(this.result);
    });
  }

  public ngOnInit() {
    console.log(this.category);
  }


}
