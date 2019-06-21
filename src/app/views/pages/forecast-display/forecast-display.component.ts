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

  constructor(private fromForecastS: ForecastService) { }

  ngOnInit() {
    this.fromForecastS.selectedCity.subscribe(x => {
      console.log('FROM FORECAST-DISPLAY COMPONENT', this.fData);
      this.fData = x;
      this.getDailyDisplay();
      this.getFiveDaysDisplay();
    });
  }

  getDailyDisplay() {
    for (let i = 0; i < 7; i++) {
      this.dailyWeatherArr[i] = this.fData[i];
    }
    this.dailyWeatherArr.splice(0, 1);
    // console.log('This is the daily display ==================>>>>', this.dailyWeatherArr);
  }

  getFiveDaysDisplay() {

    // tslint:disable-next-line: only-arrow-functions
    const dates = _.groupBy(this.fData, function(day) { return day.dt; });
    // Group objective array by dates
    // console.log('Dates of Week: ', dates);
    const distinctDates = Object.keys(dates);

    // console.log('Distinct Dates: ', distinctDates);
    // Change array to an Objective array

    for (let i = 0; i <= distinctDates.length - 1; i++) {
      // const currentDateArray = dates[distinctDates[i]];

      const maxTempForAGivenDay = _.maxBy(_.filter(this.fData,
        // tslint:disable-next-line: only-arrow-functions
        function(date) { return date.dt === distinctDates[i]; }),
        // tslint:disable-next-line: only-arrow-functions
        function(day) { return day.temp_max; });
      // Filter the max_temp per day
      // console.log('Maximum Temp is: ', maxTempForAGivenDay);

      this.fiveDaysWeather.push(maxTempForAGivenDay);
    }
    this.fiveDaysWeather.splice(0, 1);
    // console.log('This is the FIVE DAYS display ==================>>>>', this.fiveDaysWeather);
  }
}
