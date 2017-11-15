import { Component, OnInit } from '@angular/core';

import { UsersService } from './../user/users.service';
import { User } from './../user/user.model';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  candidateUsers: Array<User>;
  constructor(public usersService: UsersService) { }

  ngOnInit() {
  	this.usersService.candidateUsers
      .subscribe(
        (users: Array<User>) => {
          this.candidateUsers = users;
        });

    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'view',
                eventLabel: 'forgetpassword'});
  }
}
