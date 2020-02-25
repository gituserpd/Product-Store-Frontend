import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default/default.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryViewComponent } from './category/category-view/category-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { LoginComponent } from './default/login/login.component';
import { RegisterComponent } from './default/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  {
    path: 'home',
    component: ProductListComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', component: LoginComponent },
    ]
  },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productview/:id', component: ProductViewComponent },
  { path: 'productadd', component: ProductAddComponent },
  { path: 'productupdate/:id', component: ProductAddComponent },
  { path: 'categorylist', component: CategoryListComponent },
  { path: 'categoryview/:id', component: CategoryViewComponent },
  { path: 'categoryadd', component: CategoryAddComponent },
  { path: 'categoryupdate/:id', component: CategoryAddComponent },
  { path: '**', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
