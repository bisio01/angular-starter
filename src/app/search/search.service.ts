import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvancedSearchService {
  private domain: string = 'http://content.guardianapis.com/search';
  private apiKey: string = '866e79ee-14d3-4542-a199-c40481d72214';

  constructor(private http: Http) {

  }

  public search(params) {
    let searchObj = {};
    let qwertyParams = '';
    for (let key in params) {
      searchObj[this.camelCaseSwich(key)] = params[key];
    }
    for (let key in searchObj) {
      if (searchObj[key].length !== 0) {
        if (qwertyParams !== '') {
          qwertyParams += '&';
        }
        qwertyParams += key + '=' + encodeURIComponent(searchObj[key]);
      }
    }

    return this.http.get(`${this.domain}?${qwertyParams}&api-key=${this.apiKey}`)
      .map((res) => {
        return res.json();
      });
  }

  public camelCaseSwich(params) {
    let upperChars = params.match(/([A-Z])/g);
    if (!upperChars) {
      return params;
    }
    let str = params.toString();

    for (let i = 0, n = upperChars.length; i < n; i++) {
      str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
    }

    if (str.slice(0, 1) === '-') {
      str = str.slice(1);
    }
    return str;
  }
}
