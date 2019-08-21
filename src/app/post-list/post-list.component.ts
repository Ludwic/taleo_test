import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: Post[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts=>{
      this.posts = posts;
    }))
  }

  public delete(id: number): void {
    this.postsService.deletePost(id).subscribe((post)=>{
      alert('Post deleted');
      let index = this.posts.findIndex((post)=>{
        return post.id == id;
      })
      this.posts.splice(index,1);
    })
  }

}
