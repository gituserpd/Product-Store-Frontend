import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public allProductData: any;
  public productById: any;

  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit() {
    console.log("Product Details : \n");
    this.getProductData();
  }

  public getProductData: any = () => {
    this.productService.getAllData().subscribe(
      data => {
        console.log(data);
        this.allProductData = data;
      },
      error => {
        console.log("Error in getAllData:- ");
        console.log(error.errorMessage);
      }
    )
  }

  public deleteProduct: any = (id: number) => {
    this.productService.deleteData(id).subscribe(
      data => {
        console.log("Success Deletion");
        setTimeout(() => {
          this.router.navigate(['/productlist']);
        }, 2000);
      },
      error => {
        console.log("Error Deletion:- ");
        console.log(error.errorMessage);
      }
    )
  }

}
