import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl : string = "http://localhost:3001/Emp";
  constructor(private _http: HttpClient) { }
  public getUsers() : Observable<any> {
    return this._http.get(this.baseUrl);
  }
  public storeUser(formValue: any): Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }
  public updateUser(id:any,age:any,data:any):Observable<any>{
    return this._http.put(this.baseUrl+'/'+id+'/'+age,data)
  }
  public deleteUser(id:any):Observable<any>{
    return this._http.delete(this.baseUrl+'/'+id)
  }
  public findUser(id:any):Observable<any>{
    return this._http.get(this.baseUrl+'/'+id)
  }

  
}