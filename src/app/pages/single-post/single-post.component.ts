import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';
import { Observable } from "rxjs"
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  constructor(private post: PostService, private router: ActivatedRoute) { }
  postId: any;
  mainPost: any;
  //mainPost2: Observable<Object>;
  similarPost: any;
  ngOnInit(): void {
    this.router.params.subscribe((id) => {
      this.postId = id.id;
      console.log(this.postId);
      this.post.loadSinglePost().subscribe((allpost) => {
        console.log(allpost);
        this.mainPost = allpost.filter((item) => {

          return item.id == this.postId

        })
        console.log("mainpost", this.mainPost);
        console.log("mainpost", this.mainPost[0].title);
        this.similarPost = allpost.filter((item) => {

          return item.category.category == this.mainPost[0].category.category

        })
        console.log("similar", this.similarPost)




      });
    })


  }





}
