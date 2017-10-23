import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GiphySearchService {
  result: Object[];

  static BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=Yt8R2x6hZ420KskZdevThIP1UVIGofG6&limit=5&offset=0&rating=G&lang=en';

  constructor(private http: Http) {
    this.result = [];
  }

  search(query: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${GiphySearchService.BASE_URL}&q=${query}`;
      this.result = [];
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.result = res.json().data;
            resolve();
          },
          msg => {
        	 reject(msg);
          }
        );
  	});

  	return promise;
  }
}
