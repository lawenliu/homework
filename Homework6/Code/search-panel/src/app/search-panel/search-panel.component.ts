import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GiphySearchService } from '../services/giphy-search.service';
import { WikipediaSearchService } from '../services/wikipedia-search.service';
import { SearchHistoryService } from '../services/search-history.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  searchText: string;
  wikipediaResult: Object;
  giphyResult: Object[];

  constructor(private wikipediaSearch: WikipediaSearchService,
  	          private giphySearch: GiphySearchService,
  	          private searchHistory: SearchHistoryService,
  	          private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  change(searchBox: HTMLInputElement): void {
    this.searchText = searchBox.value;
  }

  search(): void {
    this.wikipediaSearch
      .search(this.searchText);
    this.giphySearch
      .search(this.searchText);
    this.searchHistory.addHistory(this.searchText);
  }
}
