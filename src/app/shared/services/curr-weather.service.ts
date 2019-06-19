import { Injectable } from '@angular/core';
import { IWeather } from '../interfaces/curr-specs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class CurrWeatherService {
  private apiData: any;
  private wData: IWeather;
  private urlWeather = 'weather?q=';
  constructor(private dataService: DataService) { }
  async getWeatherData(city: string) {
    await this.dataService
      .getUrl(this.urlWeather + city)
      .toPromise()
      .then(data => {

        // console.log(data);
        this.apiData = data;
        // console.log('CurrWeatherService() SAYS yhis APIDATA ->', this.apiData);
      });
    // console.log('This is fDATA -->', this.fData);
    return this.parseData(this.apiData);
  }
  parseData(pData: any) {
    const myDate = new Date(pData.dt * 1000);
    pData.dt = this.formatDate(myDate);
    const myTimeString = this.formatTime(myDate);
    const mySunrise = new Date(pData.sys.sunrise * 1000);
    pData.sys.sunrise = this.formatTime(mySunrise);
    const mySunset = new Date(pData.sys.sunset * 1000);
    pData.sys.sunset = this.formatTime(mySunset);
    this.wData = {
      lon: pData.coord.lat,
      lat: pData.coord.lon,
      weatherMain: pData.weather[0].main,
      description: pData.weather[0].description,
      icon: pData.weather[0].icon,
      temp: pData.main.temp,
      pressure: pData.main.pressure,
      humidity: pData.main.humidity,
      temp_min: pData.main.temp_min,
      temp_max: pData.main.temp_max,
      visibility: pData.visibility,
      windSpeed: pData.wind.speed,
      windDeg: pData.wind.deg,
      windGust: pData.wind.gust,
      dt: pData.dt,
      dTime: pData.dt,
      id: pData.sys.id,
      country: pData.sys.country,
      sunrise: pData.sys.sunrise,
      sunset: pData.sys.sunset,
      timezone: pData.timezone,
      name: pData.name,
    };
    return this.wData;
  }
  formatDate(myDate: Date) {
    // console.log('Format This Date', myDate);
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
