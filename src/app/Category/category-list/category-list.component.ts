import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public allCategoryData:any;
  public status:number = null;

  constructor(public categoryService:CategoryService, public router:Router) { }

  ngOnInit() {
    this.status=0;
    this.getCategoryData();
  }

  public getCategoryData:any = ()=>{
    this.allCategoryData = null;
    this.categoryService.getAllData().subscribe(
      data=>{
        this.status=1;
        this.allCategoryData = data;
      },
      error=>{
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public deleteCategory:any = (id:number)=>{
    let choice = confirm("Are you sure want to Delete?");
    if(choice){
      this.categoryService.deleteData(id).subscribe(
        data=>{
          alert("Delete Successful!");
            this.getCategoryData();
        },
        error=>{
          console.log(error.errorMessage);
          alert("Sorry you can't Delete This Category!");
        }
      )
    }
    
  }

}
