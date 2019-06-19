import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { SearchForCityService } from 'src/app/shared/services/searchForCity.service';


@Component({
  selector: 'app-enter-city-bar',
  templateUrl: './enter-city-bar.component.html',
  styleUrls: ['./enter-city-bar.component.css']
})
export class EnterCityBarComponent implements OnInit {

  list: any[] = [];
  findCity: string;

  constructor(private lookForCity: SearchForCityService ) { }

  async ngOnInit() {
  }
  // addCity = (e: any, event: any) => {
  //   console.log(event);
  //   event.value = '';
  //   // this.api.sendCity(e);
  //   this.inputCity.sendCities(e);
  // }

  searchCity() {
    if (this.findCity !== '') {
      this.lookForCity.getSearchData(this.findCity);
      this.findCity = '';
    }
  }
}
