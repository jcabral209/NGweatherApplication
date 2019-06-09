import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private city: CityService) { }

  ngOnInit() {
  }
  addCity = (e: any, event: any) => {
    console.log(event);
    event.value = '';
    // this.api.sendCity(e);
    this.city.sendCities(e);
  }
}
