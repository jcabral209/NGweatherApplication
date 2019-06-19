import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription } from 'rxjs';
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

  sData: ISearchSpecs[] = [];
  cityDisplay: ISearchSpecs[] = [];
  list: any[] = [];
  city: string;
  cityId: number;

  // @Input() inCity: string;


  constructor(private SService: SearchForCityService) { }

  ngOnChanges() {
    // alert(this.inCity);
  }

  async ngOnInit() {

    // console.log ('FROM DISPLY SEARCH CITIES ', this.sData);

    // this.city = 'Stockton, CA';
    // console.log('THIS CITY FROM DISPLAY CITIES', this.city);
    await this.SService.getSearchData(this.city).then(data => {

      console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;

      // this.filterState();
      console.log('SearchDisplayComponent() SAYS Receiving DATA -->', this.sData);

    });
  }
  // citySearch(cityId) {
  //   console.log('This is my cityId', this.cityId);
  // }
filterState() {

   
       // tslint:disable-next-line: only-arrow-functions
    const dates = _.groupBy(this.sData, function (day) { return day.state; });
    // Group objective array by dates
    console.log('Group States: ', dates);
    const distinctDates = Object.keys(dates);

    console.log('Distinct Dates: ', distinctDates);
    // Change array to an Objective array

    for (let i = 0; i <= distinctDates.length - 1; i++) {
     

      const maxTempForAGivenDay = _.maxBy(_.filter(this.sData,
        // tslint:disable-next-line: only-arrow-functions
        function (date) { return date.state === distinctDates[i]; }),
        // tslint:disable-next-line: only-arrow-functions
        function (day) { return day.temp_max; });
      // Filter the max_temp per day
      console.log('Maximum Temp is: ', maxTempForAGivenDay);

      this.cityDisplay.push(maxTempForAGivenDay);
    }
    console.log('This is the cityDisplay ==================>>>>', this.cityDisplay);
      }

}

