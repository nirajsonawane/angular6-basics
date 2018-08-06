import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../assets/employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url :string ="/assets/data/data.json";
  public employeeList =[]
  constructor(private myHttpClient : HttpClient) {

   }

  public getList() :Observable<IEmployee[]>
  {
     return this.myHttpClient.get<IEmployee[]>(this.url)
                            .pipe(map(this.extractData),catchError(this.handleErrorObservable));
                              
    

  }
  private handleErrorObservable (error: Response | any) 
  {
      console.error(error.message || error);
      //console.log("Error in Observable");
      return Observable.throw(error.message || error);
  }
  private extractData(res: Response) 
  {
     return res;
  } 
  
}
