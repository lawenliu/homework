import { uuid } from '../util/uuid';

/**
 * A User represents an agent that sends messages
 */
export class User {
  id: string;

  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public password: string,
              public address: string,
              public avatarSrc: string) {
    this.id = uuid();
  }
}
