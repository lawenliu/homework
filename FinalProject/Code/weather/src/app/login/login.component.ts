import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { UsersService } from './../user/users.service';
import { User } from './../user/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	firstButtonTitle: string;
	secondButtonTitle: string;
  message: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public usersService: UsersService) {
  }

  ngOnInit() {
    this.firstButtonTitle = "Login";
    this.secondButtonTitle = "Forgot Password";
    this.message = "";
  }

  onLogin(email: string, password: string): void {
    this.usersService.candidateUsers
      .subscribe(
        (users: Array<User>) => {
          users.map( (user: User) => {
            if (user.email === email && user.password == password) {
              this.usersService.setCurrentUser(user);
              this.usersService.setLoginState(true);
              (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'login',
                eventLabel: 'authorization'});
              this.router.navigate(['/home', "home"], {relativeTo: this.route});
            }
          });
        });
    this.message = "Error: User name or passowrd is not correct!";
  }

  onForgetPassword() {
    this.router.navigate(['/forgetpassword'], {relativeTo: this.route});
  }
}
