import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  constructor(private category: CategoriesService) {

  }
  categoryNavbar: any[] = [];
  ngOnInit(): void {
    this.category.loadData().subscribe((val) => {
      this.categoryNavbar = val;

    })
  }


}
