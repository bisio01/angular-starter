import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostViewService } from './post-view.service';

@Component({
  selector: 'post-view',
  templateUrl: 'post-view.template.html'
})
export class PostViewComponent {
  public singlePost;

  constructor(private postViewService: PostViewService,
              private _route: ActivatedRoute) {
    this._route.params.subscribe((params: any) => {
      this.postViewService.getSinglePost(params.id).subscribe((res) => {
        this.singlePost = res.response.content;
        console.log(this.singlePost);
      });
    });
  }
}
