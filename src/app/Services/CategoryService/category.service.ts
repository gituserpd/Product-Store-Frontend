import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl:any = environment.baseUrl;

  constructor(private http:HttpClient) { }

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

