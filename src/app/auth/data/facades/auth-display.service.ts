import { Injectable } from '@angular/core';
import { IAuthService } from '../../port/auth.services.interface';
import { IAuthDisplayService } from '../../port/auth-display.service.interface';
import { User } from '../../domain/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDisplayService implements IAuthDisplayService {

  constructor(private authService: AuthService) { }

   register(user: User): boolean {
    if(!user.firstname || !user.lastname || !user.password || !user.email) {
      throw new Error("User not defined");
    }
    let userWasCreated: boolean = false;
    this.authService.createUser(user).subscribe(
      response => {
        if (response) {
        userWasCreated = true;
         return userWasCreated;
        } else {
        throw new Error("User was not created");

        } 
      });

    return userWasCreated;
  }

  
}
