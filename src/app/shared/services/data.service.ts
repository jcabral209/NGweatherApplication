import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlBase = 'https://api.openweathermap.org/data/2.5/';
  private urlExt = '&units=imperial&appid=';
  private urlKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
  constructor(private http: HttpClient) { }
  getUrl(urlSearch: string) {
    console.log(this.urlBase + urlSearch + this.urlExt + this.urlKey);
    return this.http.get(this.urlBase + urlSearch + this.urlExt + this.urlKey);
  }
}
