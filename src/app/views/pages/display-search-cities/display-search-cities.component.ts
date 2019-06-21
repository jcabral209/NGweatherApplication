import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

import { ISearchSpecs} from 'src/app/shared/interfaces/curr-specs';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-display-search-cities',
  templateUrl: './display-search-cities.component.html',
  styleUrls: ['./display-search-cities.component.css']
})
export class DisplaySearchCitiesComponent implements OnInit,
  OnChanges {

  @Input() sData: ISearchSpecs[] = [];  // Input array from searchForCitySERVICES

  @Output() searchCityCurrWeather: EventEmitter<any> = new EventEmitter();  // Current Weather (CURR)

  cityDisplay: ISearchSpecs[] = [];  // Array with information to be Display
  list: any[] = [];
  cityId: string;

  constructor(private search4CityByIdCurrWeather: CurrWeatherService,   // Current Weather (CURR)
              private toForecastS: ForecastService) { }                 // Forecast Weather (FORE)

  ngOnChanges() {
    this.cityDisplay = [];
    this.filterState();
  }

  ngOnInit() { }

  searchCityById(id) {
    this.search4CityByIdCurrWeather.searchCityById(id);
    this.toForecastS.getForecastById(id);
    this.searchCityCurrWeather.emit();          // Current Weather (CURR)
    if (this.cityId !== '') {
      this.cityId = '';
    }
  }


  filterState() {

    // tslint:disable-next-line: only-arrow-functions
    const dates = _.groupBy(this.sData, function(day) { return day.state; });
    // Group objective array by dates
    // console.log('STATES BY GROUPS: ', dates);
    const distinctDates = Object.keys(dates);

    // console.log('Distinct Dates: ', distinctDates);
    // Change array to an Objective array

    for (let i = 0; i <= distinctDates.length - 1; i++) {
      // const currentDateArray = dates[distinctDates[i]];

      const maxTempForAGivenDay = _.maxBy(_.filter(this.sData,
        // tslint:disable-next-line: only-arrow-functions
        function(date) { return date.state === distinctDates[i]; }),
        // tslint:disable-next-line: only-arrow-functions
        function(day) { return day.temp_max; });
      // Filter the max_temp per day
      // console.log('Maximum Temp is: ', maxTempForAGivenDay);

      this.cityDisplay.push(maxTempForAGivenDay);
    }
    // console.log('This is the sData after FILTERED MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM', this.cityDisplay );
    // return this.cityDisplay;
  }

}

