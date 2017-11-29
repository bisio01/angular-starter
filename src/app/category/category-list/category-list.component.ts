import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'category-list',
  templateUrl: 'category-list.template.html'
})
export class CategoryListComponent implements OnInit {
  public result: any = {};

  constructor(public categoryService: CategoryService) {
    this.loadCity();
  }

  public loadCity() {
    this.categoryService.getList().subscribe((res) => {
      this.result = res.response;
      console.log(this.result);
    });
  }

  public ngOnInit() {
  }
}
