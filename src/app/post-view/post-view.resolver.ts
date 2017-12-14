import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestResolver implements CanActivate, Resolve<any> {
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.id === 'sport/2017/dec/01/wales-raise-bar-south-africa-fans-seats') {
      return true;
    }
    return false;
  }
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return Promise.resolve('hui');
  }

}
