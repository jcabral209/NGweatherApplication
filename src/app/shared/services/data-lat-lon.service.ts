import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLatLonService {

  // https://nominatim.openstreetmap.org/reverse?format=geojson&lat=44.50155&lon=11.33989
  private urlBase = 'https://nominatim.openstreetmap.org/reverse?format=geojson&';
  private urlLAT: number;
  private urlLON: number;

  constructor(private http: HttpClient) { }
  getUrlState(urlLAT: number, urlLON: number) {
    console.log(this.urlBase + 'lat=' + this.urlLAT + '&lon=' + this.urlLON);
    return this.http.get(this.urlBase + 'lat=' + this.urlLAT + '&lon=' + this.urlLON);
  }
}
