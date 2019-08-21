import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../model/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {
  public post: Post;
  public postId: number;
  public activedEdition: boolean = false;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('Id');
      this.postsService.getPost(this.postId).subscribe(post => {
        this.post = post;
      });
    });
  }

  public activeEdition(): void {
    this.activedEdition = true;
  }

  public save(): void {
    this.postsService.updatePost(this.post).subscribe(()=>{
      this.activedEdition = false;
      alert('Post updated');
    })
  }

}
