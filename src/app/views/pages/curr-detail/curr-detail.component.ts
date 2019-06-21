import { Component, OnInit, Input } from '@angular/core';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';
import { IWeather } from 'src/app/shared/interfaces/curr-specs';

@Component({
  selector: 'app-curr-detail',
  templateUrl: './curr-detail.component.html',
  styleUrls: ['./curr-detail.component.css']
})
export class CurrDetailComponent implements OnInit {

  weatherData: IWeather = null;

  list: any[] = [];

  constructor(private fromWeatherServices: CurrWeatherService) { }

  ngOnInit() {
    this.fromWeatherServices.selectedCity.subscribe(x => {
      this.weatherData = x;
    });
    // this.city = 'Stockton, US';
    // await this.SWeather.getWeatherData(this.city).then(data => {
    //   // console.log('CurrDetailComponent() SAYS Receiving DATA -->', data);
    //   this.weatherData = data;
    // });
    // console.log('NGONinit for Weather', this.weatherData);
  }
}
