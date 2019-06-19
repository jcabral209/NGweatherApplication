import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription } from 'rxjs';

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
      // console.log('SearchDisplayComponent() SAYS Receiving DATA -->', this.sData);

    });
  }
  // citySearch(cityId) {
  //   console.log('This is my cityId', this.cityId);
  // }
// filterState(this.sData) {

      //   // tslint:disable-next-line: only-arrow-functions
      //   const States = _.groupBy(this.sData, function (state) { return state.state; });
      //   // Group objective array by dates
      //   // console.log('States: ', state);
      //   const distinctDates = Object.keys(states);

      //   // console.log('Distinct States: ', distinctStates);
      //   // Change array to an Objective array

      //   for (let i = 0; i <= distinctStates.length - 1; i++) {
      //     // const currentDateArray = States[distinctStates[i]];

      //     const maxTempForAGivenDay = _.maxBy(_.filter(this.sData,
      //       // tslint:disable-next-line: only-arrow-functions
      //       function (state) { return state.state === distinctaStates[i]; }),
      //       // tslint:disable-next-line: only-arrow-functions
      //       function (state) { return state.temp_max; });
      //     // Filter the max_temp per day
      //     // console.log('Maximum Temp is: ', maxTempForAGivenDay);

      //     this.searchCitiesToDisplay.push(maxTempForAGivenDay);
      //   }
      //   // console.log('This is the FIVE DAYS display ==================>>>>', this.searchCitiesToDisplay);
      // }

}

