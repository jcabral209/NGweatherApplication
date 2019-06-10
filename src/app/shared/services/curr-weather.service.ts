import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrSpecs, IWeather } from '../interfaces/curr-specs';
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
        console.log('CurrWeatherService() SAYS yhis APIDATA ->', this.apiData);
        // this.wData = {
        //   cityId: this.apiData.id,
        //   cityName: this.apiData.name,
        //   time: this.apiData.dt,
        //   country: this.apiData.sys.country,
        //   timezone: this.apiData.timezone,
        //   windSpeed: this.apiData.wind.speed,
        //   windDeg: this.apiData.wind.deg,
        //   windGust: this.apiData.wind.gust,
        //   humidity: this.apiData.main.humidity,
        //   lat: this.apiData.coord.lat,
        //   lon: this.apiData.coord.lon,
        //   weatherIcon: this.apiData.weather[0].icon,
        //   weatherDescription: this.apiData.weather[0].description,
        //   visibility: this.apiData.visibility,
        //   pressure: this.apiData.main.pressure,
        //   temp_min: this.apiData.main.temp_min,
        //   temp_max: this.apiData.main.temp_max,
        //   temp: this.apiData.main.temp,

      //   };
      //   this.apiData.push(data);
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
      windDeg: pData.wind.speed,
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



// export class CurrWeatherService {
//   private appKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
//   private weatherNow = 'https://api.openweathermap.org/data/2.5/weather?q=';

//   private localWeather: CurrSpecs;
//   private nfo: any;

//   constructor(
//     private dataService: DataService,
//     private http: HttpClient
//     ) { }

//   getURLDataP(citySearch: string) {
//     const url = (this.weatherNow + citySearch + '&appid=' + this.appKey);
//     console.log ('This is the test URL', url);
//     const promise = new Promise((resolve, reject) => {
//       this.http
//         .get(url)
//         .toPromise()
//         .then(
//           x => {
//             console.log('This is the X OBJECT', x);
//             this.nfo = x;
//             console.log('TEST +++++====>>>>>', x);
//             this.localWeather = {
//                 cityId: this.nfo.id,
//                 cityName: this.nfo.name,
//                 country: this.nfo.sys.country,
//                 timezone: this.nfo.timezone,
//                 windSpeed: this.nfo.wind.speed,
//                 windDeg: this.nfo.wind.deg,
//                 windGust: this.nfo.wind.gust,
//                 humidity: this.nfo.main.humidity,
//                 lat: this.nfo.coord.lat,
//                 lon: this.nfo.coord.lon,
//                 weatherIcon: this.nfo.weather[0].icon,
//                 weatherDescription: this.nfo.weather[0].description,
//                 visibility: this.nfo.visibility,
//                 pressure: this.nfo.main.pressure,
//                 temp_min: this.nfo.main.temp_min,
//                 temp_max: this.nfo.main.temp_max,
//                 temp: this.nfo.main.temp,

//             };

//             console.log('CityID =========>', this.localWeather.cityId);
//             console.log('CityName =========>', this.localWeather.cityName);
//             console.log('Wind ===========>>>>>>', this.localWeather.windSpeed);
//             console.log('Humidity =============>>>>>', this.localWeather.humidity);
//             console.log(this.localWeather.temp);
//             console.log(this.localWeather.lat);
//             console.log(this.localWeather.lon);
//             console.log(this.localWeather.weatherIcon);
//             console.log('============>>>>>', this.localWeather.weatherDescription);


//             resolve();
//           },
//           msg => {
//             console.log('Your http api request got rejected!');
//             reject(msg);
//           }
//         );
//     });
//     return promise;
//   }

// }

