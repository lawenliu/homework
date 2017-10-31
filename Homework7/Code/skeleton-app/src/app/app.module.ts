import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TwoButtonComponent,
    ChatBoxComponent,
    ChatMessageComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessagesService, ThreadsService, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
