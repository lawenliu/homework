import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    public messagesService: MessagesService,
    private router: Router) { }

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
    (<any>window).ga('send', { hitType: 'event',
      eventCategory: 'csc436', eventAction: 'logout',
      eventLabel: 'authorization'});
    this.router.navigate(['/login']);
  }

  onShowMessage() {
    this.messagesService.showMessageBox(true);
    (<any>window).ga('send', { hitType: 'event',
      eventCategory: 'csc436', eventAction: 'open',
      eventLabel: 'chatbox'});
    this.router.navigate(['/home']);
  }
}
