import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../message/messages.service';
import { UsersService } from './../user/users.service';
import { User } from './../user/user.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  constructor(public usersService: UsersService,
    public messagesService: MessagesService) { }

  ngOnInit() {
  	this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });
  }

  onLogout() {
  	this.usersService.setCurrentUser(null);
    this.usersService.setLoginState(false);
  }

  onShowMessage() {
    this.messagesService.showMessageBox(true);
  }
}
