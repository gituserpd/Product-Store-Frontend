import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default/default.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';

 

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryViewComponent,
    CategoryListComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    // ToastModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
