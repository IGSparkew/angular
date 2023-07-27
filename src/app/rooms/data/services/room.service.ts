import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../domain/Room';
import { IRoomService } from '../../port/room.service.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomService implements IRoomService{
  private baseUri: string = "/api/salles";

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUri);
  }
  getRoom(id: number): Observable<Room> | undefined {
    const url = this.baseUri + `/${id}`;
    return this.http.get<Room>(url);
  }
  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.baseUri, room);
  }
  updateRoom(id: number, room: Room): Observable<Room> {
    const url = this.baseUri + `${id}`;
    return this.http.put<Room>(url, room);
  }
  deleteRoom(id: number): Observable<any> {
    const url = this.baseUri + `${id}`;
    return this.http.delete(url);
  }



}
