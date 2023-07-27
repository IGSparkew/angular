import { Injectable } from '@angular/core';
import { IAuthService } from '../../port/auth.services.interface';
import { IAuthDisplayService } from '../../port/auth-display.service.interface';
import { User } from '../../domain/user';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthDisplayService implements IAuthDisplayService {
    constructor(private authService: AuthService) {}

  login(email?: string, password?: string): Observable<User> {
    if (!email || !password) {
      throw new Error('email and password not defined');
    }
    return new Observable<User>((userFind) => {
      this.authService.getUsers().subscribe((users) => {
        userFind.next(users.find((user) => user.email === email && user.password === password));
        userFind.complete();
      })  
    })
  }

    register(user: User): Observable<boolean> {
        if (
            !user.firstname ||
            !user.lastname ||
            !user.password ||
            !user.email
        ) {
            throw new Error('User not defined');
        }
        return new Observable<boolean>((userWasCreated) => {
          this.authService.createUser(user).subscribe((response) => {
            if (response) {
               userWasCreated.next(true);
            } else {
               userWasCreated.error('User was not created');
            }
            userWasCreated.complete();
        });
        });
    }
}
