import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchHistory } from '../models/history.model';
import { SearchHistoryService } from '../services/search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  searchHistories: SearchHistory[];

  constructor(private searchHistory: SearchHistoryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchHistories = this.searchHistory.getHistories();
  }
}
