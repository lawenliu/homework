import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather-info/weather.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
