import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  constructor(private router: ActivatedRoute
    , private postservice: PostService) { }
  allPosts: Array<Object>;
  arrCategoryPosts: Array<Object>;
  ngOnInit(): void {
    this.router.params.subscribe((id => {
      console.log(id.id);
      this.postservice.loadFeaturedPost().subscribe((CategoryPosts) => {
        this.allPosts = CategoryPosts
        console.log("all post", CategoryPosts);
        //console.log("Fcheck", CategoryPosts)

        this.arrCategoryPosts = CategoryPosts.filter((item) => {
          //  console.log("inside filter check", item.category.categoryId == id.id)
          return item.category.categoryId == id.id;


        });
        console.log("specific category", id.id, this.arrCategoryPosts);
      })
    }))


  }

}
