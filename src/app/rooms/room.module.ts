import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './vue/rooms-list/rooms-list.component';
import { DisplayRoomService } from './data/facades/display-room.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../data.service';



@NgModule({
  declarations: [RoomsListComponent],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forFeature(DataService),
    HttpClientModule,
  ],
  providers: [
    DisplayRoomService
  ]
})
export class RoomModule { }
