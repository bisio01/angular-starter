import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostViewService {
  private domain: string = 'http://content.guardianapis.com/';
  private apiKey: string = '866e79ee-14d3-4542-a199-c40481d72214';

  constructor(private http: Http) {

  }

  public getSinglePost(id) {
    console.log(id);
    return this.http.get(`${this.domain}${id}?api-key=${this.apiKey}`)
      .map((res) => {
        return res.json();
      });
  }
}
