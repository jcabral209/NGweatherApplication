import { Component, OnInit } from '@angular/core';
import { CurrWeatherService } from 'src/app/shared/services/curr-weather.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  constructor(private weatherService: CurrWeatherService) { }

  ngOnInit() {
    this.weatherService.getURLDataP('Modesto');
  }

}
