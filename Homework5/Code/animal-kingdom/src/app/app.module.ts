import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { PyramidComponent } from './pyramid/pyramid.component';
import { PyramidRowComponent } from './pyramid-row/pyramid-row.component';

import { PyramidService } from './services/pyramid.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    PyramidComponent,
    PyramidRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PyramidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
