import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'category-list',
  templateUrl: 'category-list.template.html'
})
export class CategoryListComponent implements OnInit {
  public result: any = {};

  public loading = false;
  public total = 0;
  public page = 1;
  public limit = 5;

  constructor(public categoryService: CategoryService) {
    this.loadList();
  }

  public loadList() {
    this.loading = true;
    this.categoryService.getList({page: this.page}).subscribe((res) => {
      this.result = res.response;
      this.total = this.result.pages;
      console.log(this.result);
    });
    this.loading = false;
  }

  public goToPage(n: number): void {
    this.page = n;
    this.loadList();
  }

  public onNext(): void {
    this.page++;
    this.loadList();
  }

  public onPrev(): void {
    this.page--;
    this.loadList();
  }

  public ngOnInit() {
  }
}
