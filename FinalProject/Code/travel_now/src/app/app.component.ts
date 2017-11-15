import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DummyData } from './dummy-data/dummy-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
import { WeatherService } from './weather-info/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
              private route: ActivatedRoute,
              public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              public weatherService: WeatherService) {
    DummyData.init(messagesService, threadsService, usersService, weatherService);
  }
}
