import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl:any = "http://localhost/Tanveer.ProductStore.Business/ps/bl"

  constructor(private http:HttpClient){}

  public getAllData():Observable<any>{
   let url = `${this.baseUrl}/products`;
   return this.http.get(url);
  }

  public getDataById(id:Number):Observable<any>{
   let url = `${this.baseUrl}/product/${id}`;
   return this.http.get(url);
 }

 public updateData(id:number, newData:any):Observable<any>{
   let url = `${this.baseUrl}/product/update/${id}`
   return this.http.post(url, newData);
 }

 public insertData(data:any){
   let url = `${this.baseUrl}/product/add`;
   return this.http.post(url, data);
 }
 
 public deleteData(id:number){
   let url = `${this.baseUrl}/product/delete/${id}`;
   return this.http.get(url);
 }
  

}
