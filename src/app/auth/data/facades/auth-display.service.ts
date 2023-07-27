import { Injectable } from '@angular/core';
import { IAuthService } from '../../port/auth.services.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthDisplayService {

  constructor(private authService: IAuthService) { }

  
}
