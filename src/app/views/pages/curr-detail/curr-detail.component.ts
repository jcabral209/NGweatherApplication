import { Component, OnInit } from '@angular/core';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';
import { IWeather } from 'src/app/shared/interfaces/curr-specs';


@Component({
  selector: 'app-curr-detail',
  templateUrl: './curr-detail.component.html',
  styleUrls: ['./curr-detail.component.css']
})
export class CurrDetailComponent implements OnInit {

  weatherData: IWeather;
  list: any[] = [];
  city: string;
  constructor(
    private SWeather: CurrWeatherService,
    ) { }


   async ngOnInit() {
    this.city = 'Lodi, US';
    await this.SWeather.getWeatherData(this.city).then(data => {
      console.log('CurrDetailComponent() SAYS Receiving DATA -->', data);
      this.weatherData = data;
    });
    console.log('NGONinit for Weather', this.weatherData);
  }
}
