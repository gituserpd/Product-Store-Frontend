import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl:any = "http://localhost/Tanveer.ProductStore.Business/ps/bl"

  constructor(private http:HttpClient) { 
    console.log("Category service constructor called");
  }

  public getAllData():Observable<any>{
    let url = `${this.baseUrl}/categories`;
    return this.http.get(url);
  }

  public getDataById(id:Number):Observable<any>{
   let url = `${this.baseUrl}/category/${id}`;
   return this.http.get(url);
 }

 public updateData(id:number, newData:any):Observable<any>{
   let url = `${this.baseUrl}/category/update/${id}`;
   return this.http.post(url, newData);
 }

 public insertData(data:any):Observable<any>{
   let url = `${this.baseUrl}/category/add`;
   return this.http.post(url, data);
 }

 public deleteData(id:number){
   let url = `${this.baseUrl}/category/delete/${id}`;
  return this.http.get(url);
}


}

