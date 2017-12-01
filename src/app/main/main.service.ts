import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  private domain: string = 'http://content.guardianapis.com/';
  private apiKey: string = '866e79ee-14d3-4542-a199-c40481d72214';

  constructor(private http: Http) {

  }

  public getList(category) {
    return this.http.get(`${this.domain}${category}?api-key=${this.apiKey}`)
      .map((res) => {
        return res.json();
      });
  }
}
