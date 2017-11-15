import { Component, OnInit }        from '@angular/core';
import { HttpModule }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Summary } from '../weather-info/summary.model';
import { WeatherService } from '../weather-info/weather.service';
import { UsersService } from '../user/users.service';
import { MessagesService } from '../message/messages.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [HttpModule, WeatherService],
})
export class WeatherComponent implements OnInit {
	isLoading: boolean = false;
  showSummary: boolean = false;
  summaryBtnText: string = "Show Summary";
	// items: Subscription;

	private searchTermStream = new Subject<string>();

	constructor (private weatherService: WeatherService,
              public usersService: UsersService,
              public messagesService: MessagesService) {
	}

  ngOnInit() {
    this.search("Chicago");
  }

	search(term: string) {
		this.isLoading = true;
		this.searchTermStream.next(term);
    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'search',
                eventLabel: 'home'});
	}

	showOrHidSummary() {
		if (this.showSummary) {
			this.showSummary = false;
			this.summaryBtnText = "Show Summary";
		} else {
			this.showSummary = true;
			this.summaryBtnText = "Hide Summary";
		}

    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'summary',
                eventLabel: 'home'});
	}

	items = this.searchTermStream
    .debounceTime(1000)
    .switchMap((term: string) => this.weatherService.search(term))
    .subscribe(data => {
    	this.items =  data;
    	this.isLoading = false;
    	var summ = new Summary(
  			data!.query!.results!.channel!.astronomy!.sunrise,
        data!.query!.results!.channel!.astronomy!.sunset,
        data!.query!.results!.channel!.atmosphere!.humidity,
        data!.query!.results!.channel!.atmosphere!.pressure,
        data!.query!.results!.channel!.atmosphere!.visibility,
        data!.query!.results!.channel!.wind!.chill,
        data!.query!.results!.channel!.wind!.direction,
        data!.query!.results!.channel!.wind!.speed,
        data!.query!.results!.channel!.item!.pubDate,
        data!.query!.results!.channel!.item!.condition!.temp,
        data!.query!.results!.channel!.item!.condition!.text,
  		);
  		this.weatherService.setSummary(summ);
    });
}
