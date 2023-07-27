import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from './auth/domain/user';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService  {

  constructor() { }
  createDb() {
    const users = [
      {
        id:1,
        firstname: 'Paul',
        lastname: 'Nitro',
        email: 'paul.nitro@mail.com',
        password: 'azerty123'
      },
      {
        id:2,
        firstname: 'Jean',
        lastname: 'Renault',
        email: 'jean.renault@mail.com',
        password: 'azerty213'
      }
    ];


    return {
      users
    }
  }
}
