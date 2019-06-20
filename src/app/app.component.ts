import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SearchForCityService } from './shared/services/searchForCity.service';
import { ISearchSpecs, IWeather } from './shared/interfaces/curr-specs';
import { CurrWeatherService } from './shared/services/curr-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sData: ISearchSpecs[] = [];
  wData: IWeather[] = [];

  display = true;
  // tslint:disable-next-line:typedef-whitespace
  ifShow = true;
  title = 'CSA Weather Application';

  constructor(private lookForCity: SearchForCityService,
              private search4CityByIdCurrWeather: CurrWeatherService) { }

  toggleSideBar(): void {
    this.display = !this.display;
  }

  searchForCity(city) {
    this.lookForCity.getSearchData(city);
    this.lookForCity.getSearchData(city).then(data => {

      // console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.sData = data;

      // this.filterState();
      // console.log('FROM APP COMPONENT() SAYS Receiving DATA -->', this.sData);

    });
  }

  searchForCityById(cityId) {
    this.search4CityByIdCurrWeather.searchCityById(cityId);
    this.search4CityByIdCurrWeather.searchCityById(cityId).then(data => {

      // console.log('SearchComponent() SAYS Receiving DATA -->', data);
      this.wData = data;

      // this.filterState();
      // console.log('FROM APP COMPONENT() SAYS Receiving DATA -->', this.sData);

    });

  }



}
