import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import * as _ from 'lodash';

import { ISearchSpecs } from 'src/app/shared/interfaces/curr-specs';
import { SearchForCityService } from 'src/app/shared/services/searchForCity.service';
import { EventEmitter } from 'events';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';

@Component({
  selector: 'app-display-search-cities',
  templateUrl: './display-search-cities.component.html',
  styleUrls: ['./display-search-cities.component.css']
})
export class DisplaySearchCitiesComponent implements OnInit,
  OnChanges {

  @Input() sData: ISearchSpecs[] = [];

  // @Output() searchCityCurrWeather: EventEmitter<number> = new EventEmitter();

  cityDisplay: ISearchSpecs[] = [];
  list: any[] = [];
  city: string;
  cityId: string;

  constructor(private SService: SearchForCityService,
              private search4CityByIdCurrWeather: CurrWeatherService ) { }

  ngOnChanges() {
    this.cityDisplay = [];
    this.filterState();
  }

  ngOnInit() { }

  searchCityById() {
    if (this.cityId !== '') {
      this.searchCityCurrWeather.emit(this.cityId);
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

