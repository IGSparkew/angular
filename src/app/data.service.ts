import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService  {

  constructor() { }
  createDb() {
    return {
      users: [
        {
          id:1,
          firstname: 'Paul',
          lastname: 'Nitro',
          email: 'paul.nitro@mail.com',
          password: '$2a$12$QIYHu..K3eCK2nLPMR2ju.OoDDDQp17eswNF9SmIUnYgS1f1oRFDe'
        },
        {
          id:2,
          firstname: 'Jean',
          lastname: 'Renault',
          email: 'jean.renault@mail.com',
          password: '$2a$12$QIYHu..K3eCK2nLPMR2ju.OoDDDQp17eswNF9SmIUnYgS1f1oRFDe'
        }
      ]
    }
  }
}
