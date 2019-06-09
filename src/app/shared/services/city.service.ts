import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private citySubject = new Subject<any>();
  constructor() { }

  sendCities = (cities: string[]) => this.citySubject.next({cityName: cities});
  getCities = (): Observable<any> => this.citySubject.asObservable();

}
