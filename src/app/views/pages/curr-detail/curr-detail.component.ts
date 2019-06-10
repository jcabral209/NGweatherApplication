import { Component, OnInit } from '@angular/core';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';
// import { ForecastService } from 'src/app/shared/services/forecast.service';
import { IWeather } from 'src/app/shared/interfaces/curr-specs';

@Component({
  selector: 'app-curr-detail',
  templateUrl: './curr-detail.component.html',
  styleUrls: ['./curr-detail.component.css']
})
export class CurrDetailComponent implements OnInit {

  weatherData: IWeather;
  // forecastData: any = {};
  list: any[] = [];
  city: string;
  constructor(
    private SWeather: CurrWeatherService,
    // private SForecast: ForecastService
    ) { }


   async ngOnInit() {
    this.city = 'Modesto';
    await this.SWeather.getWeatherData(this.city).then(data => {
      console.log('CurrDetailComponent() SAYS Receiving DATA -->', data);
      this.weatherData = data;
    });
    // await this.SForecast.getForecastData(this.city).then(data => {
    //   this.forecastData = data;
    // });
    // this.forecastData = this.SForecast.getForecastData(this.city);
    console.log('NGONinit for Weather', this.weatherData);
    // console.log('NGONinit for forecast', this.forecastData);
  }
}
