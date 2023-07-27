import { Injectable } from '@angular/core';
import { IRoomService } from '../../port/room.service.interface';
import { Observable } from 'rxjs';
import { Room } from '../../domain/Room';
import { RoomService } from '../services/room.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayRoomService {

  constructor(private roomService:RoomService) { }

  public getAllRooms(): Observable<Room[]> {
    return new Observable((rooms) => {
      this.roomService.getRooms().subscribe(
        (response) => {
          if(response) {
            rooms.next(response);
            rooms.complete();
          }
        }
        )
    })
  } 


}
