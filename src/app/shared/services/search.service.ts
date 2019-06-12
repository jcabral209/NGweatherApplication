import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { ISearchSpecs } from '../interfaces/curr-specs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchData: any;
  private wData: ISearchSpecs;
  private urlSearch = 'find?q=';
  private sData: ISearchSpecs[] = [];
  constructor(private dataService: DataService) { }
  async getSearchData(city: string) {
    await this.dataService
      .getUrl(this.urlSearch + city)
      .toPromise()
      .then(data => {


        console.log(data);
        this.searchData = data;
        console.log('This is searchData --###------+++===>>>', this.searchData);
      });
    // console.log('This is searchData --****--+++====>>>', this.searchData);
    this.parseForecastData(this.searchData);
    return this.parseForecastData(this.searchData);
  }
  parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);
    // let myDate = new Date( your epoch date *1000);
    for (const i of [...parseD.list]) {
      console.log('This is i -->', i);
      // const myDate = new Date(i.dt * 1000);
      // i.dt = myDate.toDateString();
      // parseD.city.timezone = myDate.getHours();
      const nfo: ISearchSpecs = {
        id: parseD.city.id,
        name: parseD.city.name,
        lon: parseD.city.coord.lon,
        lat: parseD.city.coord.lat,
        temp: i.main.temp,
        pressure: i.main.pressure,
        humidity: i.main.humidity,
        temp_min: i.main.temp_min,
        temp_max: i.main.temp_max,
        dt: i.dt,
        speed: i.wind.speed,
        deg: i.wind.deg,
        country: parseD.city.country,
        rain: parseD.city.rain,
        snow: parseD.city.snow,
        main: i.weather[0].main,
        description: i.weather[0].description,
        icon: i.weather[0].icon,
      };
      this.sData.push(nfo);
    }
    console.log('This is sDATA -->', this.sData);
    return this.sData;
  }
  formatDate(myDate: Date) {
    console.log('Format This Date', myDate);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dateFormat = months[(myDate.getMonth())];
    const days = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
      '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
      '27', '28', '29', '30', '31'];
    dateFormat = dateFormat + ' ' + days[myDate.getDate()];
    dateFormat = dateFormat + ', ' + (myDate.getFullYear()).toString();
    return dateFormat;
  }
  formatTime(myDate: Date) {
    const hh = myDate.getHours();
    const mm = myDate.getMinutes();
    return hh + ':' + mm;
  }
}
