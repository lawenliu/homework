import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
	@Input() firstTitle: string;
	@Input() secondTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
