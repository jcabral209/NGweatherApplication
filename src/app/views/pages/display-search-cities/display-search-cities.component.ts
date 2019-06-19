import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as _ from 'lodash';

import { ISearchSpecs } from 'src/app/shared/interfaces/curr-specs';
import { SearchForCityService } from 'src/app/shared/services/searchForCity.service';

@Component({
  selector: 'app-display-search-cities',
  templateUrl: './display-search-cities.component.html',
  styleUrls: ['./display-search-cities.component.css']
})
export class DisplaySearchCitiesComponent implements OnInit,
  OnChanges {

  @Input() sData: ISearchSpecs[] = [];

  cityDisplay: ISearchSpecs[] = [];
  list: any[] = [];
  city: string;
  cityId: number;

  constructor(private SService: SearchForCityService) { }

  ngOnChanges() {
    this.cityDisplay = [];
    this.filterState();
  }

  ngOnInit() { }

  filterState() {

    // tslint:disable-next-line: only-arrow-functions
    const dates = _.groupBy(this.sData, function(day) { return day.state; });
    // Group objective array by dates
    console.log('STATES BY GROUPS: ', dates);
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
      console.log('Maximum Temp is: ', maxTempForAGivenDay);

      this.cityDisplay.push(maxTempForAGivenDay);
    }
    console.log('This is the sData after FILTERED MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM', this.cityDisplay );
  }

}

