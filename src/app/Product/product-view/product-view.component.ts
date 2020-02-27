import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/ProductService/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  public productId: any;
  public productById: any;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.productId) {
      this.getProductDataById(this.productId);
    }
  }

  public getProductDataById = (id: number) => {
    this.productService.getDataById(id).subscribe(
      data => {
        this.productById = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
