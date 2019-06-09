import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/shared/services/city.service';

@Component({
  selector: 'app-display-bar',
  templateUrl: './display-bar.component.html',
  styleUrls: ['./display-bar.component.css']
})
export class DisplayBarComponent implements OnInit {
  private citySubscription: Subscription;
  cityList: string[] = [];

  constructor(private city: CityService) { }

  ngOnInit() {
    this.citySubscription = this.city.getCities().subscribe(cities => {

      this.cityList.push(cities);
      console.log([...this.cityList]);
    });
  }
}
