import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

import { User } from './user.model';

/**
 * UserService manages our current user
 */
@Injectable()
export class UsersService {
  loginState: boolean = false;
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);
  robotUser: Subject<User> = new BehaviorSubject<User>(null);
  candidateUsers: Subject<Array<User>> = new BehaviorSubject<Array<User>>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }

  public setRobotUser(newUser: User): void {
    this.robotUser.next(newUser);
  }

  public setCandidateUsers(users: Array<User>): void {
    this.candidateUsers = new BehaviorSubject<Array<User>>(null);
  	this.candidateUsers.next(users);
  }

  public setLoginState(state: boolean) {
    this.loginState = state;
  }
}

export const userServiceInjectables: Array<any> = [
  UsersService
];
