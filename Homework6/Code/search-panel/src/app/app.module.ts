import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { WikipediaSearchService } from './services/wikipedia-search.service';
import { GiphySearchService } from './services/giphy-search.service';
import { SearchHistoryService } from './services/search-history.service';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPanelComponent },
  { path: 'history', component: SearchHistoryComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [
    WikipediaSearchService,
    GiphySearchService,
    SearchHistoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
