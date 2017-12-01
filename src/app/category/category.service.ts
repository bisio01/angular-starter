import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  private domain: string = 'http://content.guardianapis.com/search';
  private apiKey: string = '866e79ee-14d3-4542-a199-c40481d72214';

  constructor(private http: Http) {

  }

  public getList(params: {page: number}) {
    return this.http.get(`${this.domain}?api-key=${this.apiKey}&page=${params.page}`)
      .map((res) => {
        return res.json();
      });
  }
}
