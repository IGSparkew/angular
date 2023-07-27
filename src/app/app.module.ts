import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/vue/dashboard/dashboard.component';
import { RoomCreateComponent } from './rooms/vue/room-create/room-create.component';
import { BookingCreateComponent } from './bookings/vue/booking-create/booking-create.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientInMemoryWebApiModule.forRoot(DataService),FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
