import { Component }        from '@angular/core';
import { JSONP_PROVIDERS }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';



import { WeatherService } from './weather.service';

@Component({
	selector: 'gs-weather',
	templateUrl: 'app/weather/weather.component.html',	
	providers: [JSONP_PROVIDERS, WeatherService],
})

export class WeatherComponent {
	isLoading: boolean = false;	
	// items: Observable <string[]>;

	private searchTermStream = new Subject<string>();

	constructor (private weatherService: WeatherService) {}

	search(term: string) {
		this.isLoading = true;
		this.searchTermStream.next(term);
	}

	items = this.searchTermStream
    .debounceTime(1000)
    .switchMap((term: string) => this.weatherService.search(term))
    .subscribe(data => {
    	console.log(data);
    	this.items =  data;
    	this.isLoading = false;
    });
    


	// search (term: string) {
	// 	console.log(term);
	// 	this.items = this.weatherService.search(term);
	// 	this.isVisible = true;
	// 	console.log(this.items);
	// }
}