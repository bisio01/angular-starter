import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdvancedSearchService } from './search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.template.html'
})

export class SearchComponent implements OnInit, OnDestroy {
  public result;
  public sub;
  public currentForm;

  public searchForm: FormGroup = new FormGroup({
    q: new FormControl(''),
    section: new FormControl(''),
    tag: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    orderBy: new FormControl(''),
  });

  constructor(public advancedSearchService: AdvancedSearchService,
              private _router: Router,
              private _route: ActivatedRoute) {
  }

  public appendParamToUrl(queryParams) {
    for (let key in queryParams) {
      if (!queryParams[key]) {
        delete queryParams[key];
      }
    }
    this._router.navigate([], {queryParams});
  }

  public getParamsFromUrl() {
    this.sub = this._route
      .queryParams
      .subscribe((params) => {
        this.currentForm = params;

        for (let key in this.currentForm) {
          this.searchForm.controls[key].setValue(this.currentForm[key]);
        }

        this.onSubmit();
      });
  }

  public onSubmit() {
    this.appendParamToUrl(this.searchForm.value);
    this.advancedSearchService.search(this.searchForm.value).subscribe((res) => {
      this.result = res.response;
    });

  }

  public openView(id) {
    this._router.navigate([{outlets: {aside: ['post-view', id]}}]);
  }

  public ngOnInit() {
    this.getParamsFromUrl();
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
