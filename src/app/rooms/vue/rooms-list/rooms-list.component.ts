import { Component } from '@angular/core';
import { Room } from '../../domain/Room';
import { DisplayRoomService } from '../../data/facades/display-room.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  salles: Room[] = [];

  constructor(private displayService:DisplayRoomService) {}

  ngOnInit(): void {
    this.displayService.getAllRooms().subscribe(data => this.salles = data);
  }
}
