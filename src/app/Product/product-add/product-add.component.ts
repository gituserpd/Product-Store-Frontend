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

  constructor(
    public productService: ProductService, public categoryService: CategoryService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    console.log("Insert Product Component");
  }

  ngOnInit() {
    this.getCategoryData();
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.getProductDataById(this.productId);
    }
  }

  public getCategoryData: any = () => {
    this.categoryService.getAllData().subscribe(
      data => {
        this.allCategoryData = data;
        console.log(this.allCategoryData);
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
    //console.log(prodData);
    this.productService.insertData(prodData).subscribe(
      data => {
        console.log("Creation Successful");
        setTimeout(() => {
          console.log("Inserted Prod Data");
          console.log(prodData);
          this.router.navigate(['productlist'])
        }, 2000);
      },
      error => {
        console.log("Error in Insertion");
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
      "CreatedBy": ""
    }
    console.log(prodData);
    this.productService.updateData(prodData.Id, prodData).subscribe(
      data => {
        console.log("Creation Successful");
        setTimeout(() => {
          this.router.navigate(['productlist'])
        }, 2000);
      },
      error => {
        console.log("Error in Insertion");
      }
    )
  }

  public getProductDataById: any = (id: Number) => {
    this.productService.getDataById(id).subscribe(
      data => {
        // console.log(data);
        this.productById = data;
        this.prodName = data.Name;
        this.prodDescription = data.Description;
        this.prodPrice = data.Price;
        this.prodQty = data.Quantity;
        this.prodCategory = data.CategoryId;
      },
      error => {
        console.log("Error in getProductDataById:- ");
        console.log(error.errorMessage);
      }
    )
  }

}
