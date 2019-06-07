import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrSpecs } from '../interfaces/curr-specs';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class CurrWeatherService {
  private appKey = '4109ffc3fcbdb1d5f8c9711fceac0e39';
  private weatherNow = 'https://api.openweathermap.org/data/2.5/weather?q=';

  private localWeather: CurrSpecs;
  private nfo: any;

  constructor(
    private dataService: DataService,
    private http: HttpClient
    ) { }

  getURLDataP(citySearch: string) {
    const url = (this.weatherNow + citySearch + '&appid=' + this.appKey);
    console.log ('This is the test URL', url);
    const promise = new Promise((resolve, reject) => {
      this.http
        .get(url)
        .toPromise()
        .then(
          x => {
            console.log('This is the X OBJECT', x);
            this.nfo = x;
            console.log('TEST +++++====>>>>>', x);
            this.localWeather = {
                cityId: this.nfo.id,
                cityName: this.nfo.name,
                country: this.nfo.sys.country,
                timezone: this.nfo.timezone,
                windSpeed: this.nfo.wind.speed,
                windDeg: this.nfo.wind.deg,
                windGust: this.nfo.wind.gust,
                humidity: this.nfo.main.humidity,
                lat: this.nfo.coord.lat,
                lon: this.nfo.coord.lon,
                weatherIcon: this.nfo.weather[0].icon,
                weatherDescription: this.nfo.weather[0].description,
                visibility: this.nfo.visibility,
                pressure: this.nfo.main.pressure,
                temp_min: this.nfo.main.temp_min,
                temp_max: this.nfo.main.temp_max,
                temp: this.nfo.main.temp,

            };

            console.log('CityID =========>', this.localWeather.cityId);
            console.log('CityName =========>', this.localWeather.cityName);
            console.log('Wind ===========>>>>>>', this.localWeather.windSpeed);
            console.log('Humidity =============>>>>>', this.localWeather.humidity);
            console.log(this.localWeather.temp);
            console.log(this.localWeather.lat);
            console.log(this.localWeather.lon);
            console.log(this.localWeather.weatherIcon);
            console.log('============>>>>>', this.localWeather.weatherDescription);


            resolve();
          },
          msg => {
            console.log('Your http api request got rejected!');
            reject(msg);
          }
        );
    });
    return promise;
  }

}

