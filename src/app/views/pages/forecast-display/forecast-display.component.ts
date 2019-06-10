import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { IForecast } from 'src/app/shared/interfaces/curr-specs';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css']
})
export class ForecastDisplayComponent implements OnInit {

  fData: IForecast[] = [];
  list: any[] = [];
  dailyWeatherArr: any[] = [];
  city: string;
  constructor(
    private SForecast: ForecastService
  ) { }

  async ngOnInit() {
    this.city = 'Modesto';
    await this.SForecast.getForecastData(this.city).then(data => {
      console.log('ForecastDisplayComponent() SAYS Receiving DATA -->', data);
      this.fData = data;
      console.log('ForecastDisplayComponent() SAYS Receiving DATA -->', this.fData);

    });
    this.getDailyDisplay();
  }

  getDailyDisplay() {

    for (let i = 1; i < 8; i++) {
      this.dailyWeatherArr[i] = this.fData[i];
    }
    console.log('This is the daily disply ==================>>>>', this.dailyWeatherArr);
  }

  getFiveDaysDisplay() { }

  }



