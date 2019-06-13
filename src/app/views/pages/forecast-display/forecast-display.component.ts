import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { IForecast } from 'src/app/shared/interfaces/curr-specs';
import * as _ from 'lodash';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css']
})
export class ForecastDisplayComponent implements OnInit {

  fData: IForecast[] = [];
  list: any[] = [];
  dailyWeatherArr: IForecast[] = [];
  fiveDaysWeather: IForecast[] = [];
  city: string;
  constructor(
    private SForecast: ForecastService
  ) { }

  async ngOnInit() {
    this.city = 'Stockton, US';
    await this.SForecast.getForecastData(this.city).then(data => {
      console.log('ForecastDisplayComponent() SAYS Receiving DATA -->', data);
      this.fData = data;
      console.log('ForecastDisplayComponent() SAYS Receiving DATA -->', this.fData);

    });
    this.getDailyDisplay();
    this.getFiveDaysDisplay();
  }

  getDailyDisplay() {
    for (let i = 0; i < 7; i++) {
      this.dailyWeatherArr[i] = this.fData[i];
    }
    this.dailyWeatherArr.splice(0, 1);
    console.log('This is the daily disply ==================>>>>', this.dailyWeatherArr);
  }

  getFiveDaysDisplay() {
    // tslint:disable-next-line:only-arrow-functions

    const dates = _.groupBy(this.fData, function (day) { return day.dt; });

    console.log('Dates of Week: ', dates);
    const distinctDates = Object.keys(dates);

    // const fiveDaysWeather = [];
    for (let i = 0; i <= distinctDates.length - 1; i++) {
      // tslint:disable-next-line:only-arrow-functions
      const currentDateArray = dates[distinctDates[i]];
      const maxTempForAGivenDay = _.maxBy(currentDateArray, function (day) { return day.temp_max; });
      console.log('For Date: ', currentDateArray[0].dt);
      console.log('Maximum Temp is: ', maxTempForAGivenDay);
      this.fiveDaysWeather.push(currentDateArray);
    }
    this.fiveDaysWeather.splice(0, 1);
    console.log('This is the FIVE DAYS display ==================>>>>', this.fiveDaysWeather);

  }
}



