import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  public categoryId: any;
  public categoryById: any;
  public allCategoryData: any;
  public catName: string;
  public catDescription: string;
  public catCreateBy: number = 1;

  public responseStatus:number=null;

  constructor(public categoryService: CategoryService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.categoryId) {
      this.getCategoryDataById(this.categoryId);
    }
  }

  public getCategoryData: any = () => {
    this.categoryService.getAllData().subscribe(
      data => {
        this.responseStatus = null;
        this.allCategoryData = data;
        this.responseStatus = 1;
      },
      error=>{
        this.responseStatus = 0;
      }
    )
  }

  public insertCatData: any = () => {
    let catData: any = {
      "Name": this.catName,
      "Description": this.catDescription,
      "CreatedBy": ""
    }
    this.categoryService.insertData(catData).subscribe(
      data => {
        console.log("Creation Successful");
        setTimeout(() => {
          this.router.navigate(['/categorylist'])
        }, 2000);
      },
      error => {
        console.log("Error in Insertion");
      }
    )
  }

  public updateCatData: any = () => {
    let catData: any = {
      "Id": this.categoryId,
      "Name": this.catName,
      "Description": this.catDescription,
      "CreatedBy": this.catCreateBy
    }
    console.log(catData);
    this.categoryService.updateData(catData.Id, catData).subscribe(
      data => {
        console.log("Updation Successful");
        setTimeout(() => {
          this.router.navigate(['/categorytview'])
        }, 2000);
      },
      error => {
        console.log("Error in Updation");
      }
    )
  }

  public getCategoryDataById: any = (id: Number) => {
    this.categoryService.getDataById(id).subscribe(
      data => {
        console.log(data);
        this.categoryById = data;
        this.categoryId = data.Id;
        this.catName = data.Name;
        this.catDescription = data.Description;
      },
      error => {
        console.log("Error in getCategorDataById:- ");
        console.log(error.errorMessage);
      }
    )
  }


}
