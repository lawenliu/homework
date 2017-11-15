import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	(<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'view',
                eventLabel: 'about'});
  }

}
