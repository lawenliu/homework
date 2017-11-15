import { Injectable} from '@angular/core';
import{ Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Summary } from './summary.model';

@Injectable()
export class WeatherService {
	summary: Summary;
	// private _url: string = 'https://jsonplaceholder.typicode.com/posts';
	// private _url: string = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
	// private data: Observable <string[]>;
	constructor(private _http: Http) {}


	search(term: string){
		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+term+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
		var result = this._http.get(url )
							.map( res => res.json());
		return result;
	}

	setSummary(summ: Summary) {
		this.summary = summ;
	}

	querySummary(query: string) {
		if (query.indexOf("sunrise") != -1) {
			return this.summary.sunrise;
		} else if (query.indexOf("sunset") != -1) {
			return this.summary.sunset;
		} else if (query.indexOf("humidity") != -1) {
			return this.summary.humidity;
		} else if (query.indexOf("pressure") != -1) {
			return this.summary.pressure;
		} else if (query.indexOf("visibility") != -1) {
			return this.summary.visibility;
		} else if (query.indexOf("chill") != -1) {
			return this.summary.windChill;
		} else if (query.indexOf("direction") != -1) {
			return this.summary.windDirection;
		} else if (query.indexOf("speed") != -1) {
			return this.summary.windSpeed;
		} else if (query.indexOf("publish") != -1) {
			return this.summary.pubDate;
		} else if (query.indexOf("temperature") != -1) {
			return this.summary.temp;
		} else if (query.indexOf("condition") != -1) {
			return this.summary.condition;
		} else {
			return "I can't understand you, please try another query.";
		}
	}
}