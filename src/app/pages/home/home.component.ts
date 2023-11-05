import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private postervice: PostService) {
  }

  ngOnInit(): void {

    this.postervice.loadFeaturedPost().subscribe(val => {


      console.log(val);
      this.arrFeaturedPosts = val.filter((item) => {
        console.log("Fcheck", item.isFeatured)
        return item.isFeatured;
      });

      console.log('featured', this.arrFeaturedPosts);

    });

    this.postervice.loadFeaturedPost().subscribe(val => {


      //console.log(val);
      this.arrLatestPosts = val.filter(item => item.isFeatured);
      // console.log(this.arrLatestPosts);
      this.arrLatestPosts = val;
      console.log("latest", this.arrLatestPosts)

    });



  }
  arrFeaturedPosts: Array<Object>
  arrLatestPosts: Array<Object>








}


