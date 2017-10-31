import { uuid } from '../util/uuid';

/**
 * A User represents an agent that sends messages
 */
export class User {
  id: string;

  constructor(public firstName: string,
              public lastName: string,
              public emailAddress: string,
              public avatarSrc: string) {
    this.id = uuid();
  }
}
