import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchHistory } from '../models/history.model'

@Injectable()
export class SearchHistoryService {
  searchHistories: SearchHistory[]

  constructor() {
    this.searchHistories = [];
  }

  addHistory(searchWords: string) {
    var currentdate = new Date(); 
    var timestamp = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    this.searchHistories.push(new SearchHistory(timestamp, searchWords));
  }

  getHistories() {
    return this.searchHistories;
  }
}
