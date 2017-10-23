import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Wikipedia } from '../models/wikipedia.model'

@Injectable()
export class WikipediaSearchService {
  result: Wikipedia[];
  words: string[];
  descriptions: string[];
  urls: string[];

  static BASE_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&format=json';

  constructor(private http: Http) {
    this.words = [];
    this.descriptions = [];
    this.urls = [];
    this.result = [];
  }

  search(query: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${WikipediaSearchService.BASE_URL}&search=${query}`;
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      };

      const headerObj = {                                                                                                                                                                                 
        headers: new Headers(headerDict), 
      };
      this.http.get(apiURL, headerObj)
        .toPromise()
        .then(
          res => { // Success
            this.words = res.json()[1];
            this.descriptions = res.json()[2];
            this.urls = res.json()[3];
            this.result = [];
            for (var index = 0; index < this.words.length; index++) {
              this.result.push(
                new Wikipedia(this.words[index],
                              this.descriptions[index],
                              this.urls[index])
              );
            }

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
