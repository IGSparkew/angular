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

    const salles = [
      {
        id:1,
        name:'Basic Fit',
        adress: '12 rue cordelier',
        hours: '8h-16h'
      },
      {
        id:2,
        name:'Fitness Park',
        adress: '15 rue bichons',
        hours: '8h-12h'
      }
    ];

    const booking =[
      {
        id_salles:2,
        id_user:1
      },
      {
        id_salles:1,
        id_user:2
      }
    ]


    return {
      users, salles, booking
    }
  }
}
