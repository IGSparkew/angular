import { Injectable } from '@angular/core';
import { IAuthService } from '../../port/auth.services.interface';
import { IAuthDisplayService } from '../../port/auth-display.service.interface';
import { User } from '../../domain/user';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/domain/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthDisplayService implements IAuthDisplayService {
  private authenticated: boolean = false;
  constructor(private authService: AuthService, private localStorageService: LocalStorageService) {}


  login(email?: string, password?: string): Observable<User> {
    if (!email || !password) {
      throw new Error('email and password not defined');
    }
    return new Observable<User>((userFind) => {
      this.authService.getUsers().subscribe((users) => {
        const userFinded = users.find((user) => user.email === email && user.password === password);
        if (userFinded) {
      
            this.localStorageService.setUser(userFinded.id);
            userFind.next(userFinded);
        }
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

    isAuthenticated(): boolean {
      return this.authenticated;
    }

    logout(): void {
      // Implement your logout logic here.
      this.authenticated = false;
    }
}
