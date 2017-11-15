/* tslint:disable:max-line-length */
import { User } from '../user/user.model';
import { Thread } from '../thread/thread.model';
import { Message } from '../message/message.model';
import { MessagesService } from '../message/messages.service';
import { ThreadsService } from '../thread/threads.service';
import { UsersService } from '../user/users.service';
import { WeatherService } from '../weather-info/weather.service';
import * as moment from 'moment';

// the person using the app us Juliet
const user1: User = new User('Juliet',
                          'Capulet',
                          'jc@gmail.com',
                          'test1',
                          '1 E Jackson Blvd, Chicago, IL 60604',
                          'assets/images/avatars/female-avatar-1.png');
const user2: User = new User('Romeo',
                           'Montecchi',
                           'rm@hotmail.com',
                           'test2',
                           '2320 N Kenmore Ave. Chicago, IL 60604',
                           'assets/images/avatars/male-avatar-1.png');
const user3: User = new User('Chandler',
                           'Gegg',
                           'CHANDLERGEGG@GMAIL.COM',
                           'test3',
                           '243 South Wabash Avenue. Chicago, IL 60604',
                           'assets/images/avatars/male-avatar-1.png');
const user4: User = new User('Wenchuang',
                           'Liu',
                           'lwc541117@hotmail.com',
                           'test4',
                           '2320 N Kenmore Ave. Chicago, IL 60604',
                           'assets/images/avatars/male-avatar-1.png');
const echo: User = new User('Summary',
                           'Robot',
                           'sr@hotmail.com',
                           'test3',
                           '2350 N Kenmore Ave. Chicago, IL 60604',
                           'assets/images/avatars/male-avatar-2.png');

const tEcho: Thread    = new Thread('tEcho',
                          echo.firstName + " " + echo.lastName,
                          echo.avatarSrc);

const initialUsers: Array<User> = [
  user1,
  user2,
  user3,
  user4
];

const initialMessages: Array<Message> = [
  new Message({
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll answer some questions about summary.`,
    thread: tEcho
  }),
];

export class DummyData {
  static init(messagesService: MessagesService,
              threadsService: ThreadsService,
              usersService: UsersService,
              weatherService: WeatherService): void {

    // TODO make `messages` hot
    messagesService.messages.subscribe(() => ({}));

    usersService.setCandidateUsers(initialUsers);

    // set "Juliet" as the current user
    usersService.setRobotUser(echo);

    // create the initial messages
    initialMessages.map( (message: Message) => messagesService.addMessage(message) );

    threadsService.setCurrentThread(tEcho);

    this.setupChats(messagesService, weatherService);
  }

  static setupChats(messagesService: MessagesService, weatherService: WeatherService): void {

    // echo bot
    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach( (message: Message): void => {
      }, null);
  }
}
