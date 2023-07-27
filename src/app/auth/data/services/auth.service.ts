import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthService } from '../../port/auth.services.interface';
import { User } from '../../domain/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService{
  private baseUri: string = "/api/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUri);
  }
  getUser(id: number): Observable<User> | undefined {
    const url = this.baseUri + `/${id}`;
    return this.http.get<User>(url);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUri, user);
  }
  updateUser(id: number, user: User): Observable<User> {
    const url = this.baseUri + `${id}`;
    return this.http.put<User>(url, user);
  }
  deleteUser(id: number): Observable<any> {
    const url = this.baseUri + `${id}`;
    return this.http.delete(url);
  }



}
