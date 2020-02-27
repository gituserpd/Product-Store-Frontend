import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public allCategoryData: any;
  public productId: any;
  public productById: any;
  public prodName: string;
  public prodPrice: number;
  public prodQty: number;
  public prodDescription: string;
  public prodCategory: number;
  public prodCreateBy: number = 1;
  public catStatus:number;


  constructor(
    public productService: ProductService, public categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.catStatus=0;
    this.getCategoryData();
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.getProductDataById(this.productId);
    }
  }

  public getCategoryData: any = () => {
    this.allCategoryData=null;
    this.categoryService.getAllData().subscribe(
      data => {
        this.catStatus=1
        this.allCategoryData = data;
      },
      error=>{
        this.catStatus=0;
        console.log(error.errorMessage);
      }
    )
  }

  public insertProdData: any = () => {
    let prodData: any = {
      "Name": this.prodName,
      "CategoryId": this.prodCategory,
      "Price": this.prodPrice,
      "Quantity": this.prodQty,
      "Description": this.prodDescription,
      "CreatedBy": this.prodCreateBy
    }
    this.productService.insertData(prodData).subscribe(
      data => {
          this.router.navigate(['productlist']);
      },
      error => {
        console.log(error.errorMessage);
        alert("Error in Adding");
      }
    )
  }

  public updateProdData: any = () => {
    let prodData: any = {
      "Id": this.productId,
      "Name": this.prodName,
      "CategoryId": this.prodCategory,
      "Price": this.prodPrice,
      "Quantity": this.prodQty,
      "Description": this.prodDescription,
      "CreatedBy": this.prodCreateBy
    }
    this.productService.updateData(prodData.Id, prodData).subscribe(
      data => {
          this.router.navigate(['productlist']);
      },
      error => {
        console.log(error.errorMessage);
        alert("Error in Update");
      }
    )
  }

  public getProductDataById: any = (id: Number) => {
    this.productService.getDataById(id).subscribe(
      data => {
        this.productById = data;
        this.prodName = data.Name;
        this.prodDescription = data.Description;
        this.prodPrice = data.Price;
        this.prodQty = data.Quantity;
        this.prodCategory = data.CategoryId;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
