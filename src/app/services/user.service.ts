import { Injectable } from '@angular/core';
import {User} from '../shared/user';
import {USERS} from '../shared/users';

@Injectable()
export class UserService {

  constructor() { }
  getUsers(): User[] {
    return USERS;
  }

}
