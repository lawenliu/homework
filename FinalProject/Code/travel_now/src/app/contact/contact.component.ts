import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	(<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'view',
                eventLabel: 'contact'});
  }

}
