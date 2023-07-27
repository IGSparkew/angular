import { Observable } from "rxjs";
import { Room } from "../domain/Room";

export interface IRoomService {
    getRooms(): Observable<Room[]>;
    getRoom(id: number): Observable<Room> | undefined;
    createRoom(room: Room): Observable<Room>;
    updateRoom(id: number, room: Room): Observable<Room>;
    deleteRoom(id: number): Observable<any>;
}