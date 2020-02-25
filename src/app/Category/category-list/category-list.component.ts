import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public allCategoryData:any;
  public status:number = null;

  constructor(public categoryService:CategoryService, public router:Router) { 
    console.log("Category Constructor");
  }

  ngOnInit() {
    this.getCategoryData();
  }

  public getCategoryData:any = ()=>{
    this.categoryService.getAllData().subscribe(
      data=>{
        console.log(data);
        this.allCategoryData = data;
      },
      error=>{
        console.log("Error in getAllData:- ");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteCategory:any = (id:number)=>{
    this.categoryService.deleteData(id).subscribe(
      data=>{
        console.log("Success Deletion");
        setTimeout(()=>{
          this.router.navigate(['/categorylist']);
        },2000);
      },
      error=>{
        console.log("Error Deletion:- ");
        console.log(error.errorMessage);
      }
    )
  }

}
