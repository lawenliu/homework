import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpModule }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { User } from '../user/user.model';
import { UsersService } from '../user/users.service';
import { EmailService } from '../email/email.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [HttpModule, EmailService],
})
export class ProfileComponent implements OnInit {
  currentUser: User;
  message: string;
  emailMsg: string;
	firstButtonTitle: string;
	secondButtonTitle: string;
  private sendEmailStream = new Subject<string>();

  constructor(public usersService: UsersService,
    public emailService: EmailService,
  	private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  	this.firstButtonTitle = "Save";
    this.secondButtonTitle = "Back Home";
    this.message = "";
  	this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    if (this.currentUser == null) {
    	this.router.navigate(['/login']);
    }
  }

	onSave(): void {
		let initialUsers: Array<User> = [];
		var isFind = false;
    this.usersService.candidateUsers
      .subscribe(
        (users: Array<User>) => {
          users.map( (user: User) => {
            if (user.email === this.currentUser.email) {
            	initialUsers.push(this.currentUser);
              this.usersService.setCurrentUser(this.currentUser);
              this.usersService.setLoginState(true);
              isFind = true;
              this.message = "Successfully: your profile has been updated!";
              this.sendEmail(this.currentUser.email);
            } else {
            	initialUsers.push(user);
            }
          });
        });

    this.usersService.setCandidateUsers(initialUsers);
    if (!isFind) {
    	this.message = "Successfully: Can't find you profile. Are you a hacker?";
    }

    (<any>window).ga('send', { hitType: 'event',
      eventCategory: 'csc436', eventAction: 'update',
      eventLabel: 'profile'});
  }

  sendEmail(email: string) {
    this.sendEmailStream.next(email);
  }

  emailMessage = this.sendEmailStream
    .debounceTime(1000)
    .switchMap((email: string) => this.emailService.sendEmail(email))
    .subscribe(data => {
      this.emailMsg = "Email has been sent with: " + data.message;
    });

  onBackHome() {
    (<any>window).ga('send', { hitType: 'event',
      eventCategory: 'csc436', eventAction: 'back',
      eventLabel: 'profile'});
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
}
