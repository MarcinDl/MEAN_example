import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VisitorDataService {

  url:string = "http://localhost:4700/api/visitorData";

  constructor(
    private http:HttpClient
  ) { }

  createVisit(visitData:any):Observable<any> {
    return this.http.post(this.url, visitData)
  }

  getAllVisitorsData():Observable<any> {
    return this.http.get(this.url)
  }

}
