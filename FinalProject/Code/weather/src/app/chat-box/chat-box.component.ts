import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../user/user.model';
import { UsersService } from '../user/users.service';
import { Thread } from '../thread/thread.model';
import { ThreadsService } from '../thread/threads.service';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { WeatherService } from '../weather-info/weather.service';

@Component({
  selector: 'chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  messages: Observable<any>;
  currentThread: Thread;
  draftMessage: Message;
  currentUser: User;
  robotUser: User;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              public weatherService: WeatherService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;

    this.draftMessage = new Message();

    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });

    this.usersService.currentUser
      .subscribe(
        (user: User) => {
          this.currentUser = user;
        });

    this.usersService.robotUser
      .subscribe(
        (user: User) => {
          this.robotUser = user;
        });

    this.messages
      .subscribe(
        (messages: Array<Message>) => {
          setTimeout(() => {
            this.scrollToBottom();
          });
        });
  }

  onEnter(event: any): void {
    this.sendMessage();
    event.preventDefault();
  }

  onClose(event: any): void {
    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'close',
                eventLabel: 'chatbox'});
    this.messagesService.showMessageBox(false);
  }

  sendMessage(): void {
    const m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
    
    let replyMsg = this.weatherService.querySummary(m.text);
    this.messagesService.addMessage(
      new Message({
        author: this.robotUser,
        text: replyMsg,
        thread: this.currentThread
      })
    );

    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'send',
                eventLabel: 'chatbox'});
  }

  scrollToBottom(): void {
    const scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;

    (<any>window).ga('send', { hitType: 'event',
                eventCategory: 'csc436', eventAction: 'scroll',
                eventLabel: 'chatbox'});
  }
}