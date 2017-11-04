import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
	@Input() firstTitle: string;
	@Input() secondTitle: string;
	@Output() first: EventEmitter<any> = new EventEmitter();
  @Output() second: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  firstClicked() {
    this.first.emit();
  }

  secondClicked() {
    this.second.emit();
  }
}
