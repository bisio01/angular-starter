import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostViewService } from './post-view.service';

@Component({
  selector: 'post-view',
  templateUrl: 'post-view.template.html'
})
export class PostViewComponent {
  public singlePost;
  public isAside = location.pathname.includes('(aside:');

  constructor(private postViewService: PostViewService,
              private _router: Router,
              private _route: ActivatedRoute) {
    this._route.params.subscribe((params: any) => {
      this.postViewService.getSinglePost(params.id).subscribe((res) => {
        this.singlePost = res.response.content;
      });
    });
  }

  public resolverTest() {
    this._route.data.subscribe((res) => {
      console.log(res);
    });
  }

  public closeModal() {
    this._router.navigate([{ outlets: { aside: null }}]);
  }
}
