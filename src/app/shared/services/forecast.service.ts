import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { IForecast } from '../interfaces/curr-specs';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiData: any = {};
  private urlWeather = 'forecast?q=';
  private fData: IForecast[] = [];
  constructor(private dataService: DataService) { }
  async getForecastData(city: string) {
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {
        // console.log(data);
        this.apiData = data;
        console.log('This is APIDATA --###------+++===>>>', this.apiData);
      });
    // console.log('This is APIDATA ForeCast--****--+++====>>>', this.apiData);
    // this.parseForecastData(this.apiData);
    return this.parseForecastData(this.apiData);
  }
  parseForecastData(parseD: any) {
    // console.log('This is PARSED -->', parseD);
    // let myDate = new Date( your epoch date *1000);
    for (const i of [...parseD.list]) {
      // console.log('This is i -->', i);
      const myDate = new Date( i.dt * 1000);
      i.dt = myDate.toDateString();
      parseD.city.timezone = myDate.getHours();
      const nfo: IForecast = {
        temp: i.main.temp,
        temp_min: i.main.temp_min,
        temp_max: i.main.temp_max,
        pressure: i.main.pressure,
        humidity: i.main.humidity,
        weatherMain: i.weather[0].main,
        description: i.weather[0].description,
        icon: i.weather[0].icon,
        windSpeed: i.wind.speed,
        windDeg: i.wind.deg,
        dt: i.dt,
        country: parseD.city.country,
        timezone: parseD.city.timezone,
        id: parseD.city.id,
        name: parseD.city.name,
        lon: parseD.city.coord.lon,
        lat: parseD.city.coord.lat,
        polution: parseD.city.population
      };
      this.fData.push(nfo);
    }
    console.log('This is fDATA -->', this.fData);
    return this.fData;
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
