import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	firstButtonTitle: string;
	secondButtonTitle: string;
  constructor() {
    this.firstButtonTitle = "Login";
    this.secondButtonTitle = "Forgot Password";
  }

  ngOnInit() {
  }

}
