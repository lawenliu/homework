import { Component, OnInit } from '@angular/core';
import { WeatherComponent } from '../weather/weather.component';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { User } from '../user/user.model';
import { UsersService } from '../user/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(public usersService: UsersService,
  	private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  	this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    if (this.currentUser == null) {
    	this.router.navigate(['/login']);
    }

    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'view',
                eventLabel: 'home'});
  }
}
