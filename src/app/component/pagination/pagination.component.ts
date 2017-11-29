import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.template.html',
})

export class PaginationComponent {
  @Input() public page: number;
  @Input() public count: number;
  @Input() public perPage: number;
  @Input() public pagesToShow: number;
  @Input() public loading: boolean;

  @Output() public goPrev = new EventEmitter<boolean>();
  @Output() public goNext = new EventEmitter<boolean>();
  @Output() public goPage = new EventEmitter<number>();

  constructor() {

  }

  public getMin(): number {
    return ((this.perPage * this.page) - this.perPage) + 1;
  }

  public getMax(): number {
    let max = this.perPage * this.page;
    if (max > this.count) {
      max = this.count;
    }
    return max;
  }

  public onPage(n: number): void {
    this.goPage.emit(n);
  }

  public onPrev(): void {
    this.goPrev.emit(true);
  }

  public onNext(next: boolean): void {
    this.goNext.emit(next);
  }

  public totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  public lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  public getPages(): number[] {
    const c = Math.ceil(this.count / this.perPage);
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }
}
