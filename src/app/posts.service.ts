import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './model/post';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number) {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  deletePost(id: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  updatePost(post: Post) {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/'+post.id, post);
  }
}
