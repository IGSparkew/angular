import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUser(userId?: number) {
    if (userId) {
      localStorage.setItem('userId', userId.toString() ?? "");
      localStorage.setItem('isConnected', String(true));
    }
    
  }

  getUser(): number {
    return parseInt(localStorage.getItem('userId') ?? "0");
  }

}
