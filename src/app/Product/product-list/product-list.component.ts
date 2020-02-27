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
  public status:number = null;

  constructor(public productService: ProductService, public router: Router) { }

  ngOnInit() {
    this.status=0;
    this.getProductData();
  }

  public getProductData: any = () => {
    this.productService.getAllData().subscribe(
      data => {
        this.status=1;
        this.allProductData = data;
      },
      error => {
        this.status=-1;
        console.log(error.errorMessage);
      }
    )
  }

  public deleteProduct: any = (id: number) => {
    let choice = confirm("Are you sure want to Delete?");
    if(choice){
      this.productService.deleteData(id).subscribe(
        data => {
          alert("Delete Successful!");
            this.getProductData();
        },
        error => {
          console.log(error.errorMessage);
          alert("Sorry you can't Delete This Category!");
        }
      )
    }
    
  }

}
