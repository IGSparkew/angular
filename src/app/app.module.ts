import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HexaSportResaModule } from './hexa-sport-resa/hexa-sport-resa.module';
import { DashboardComponent } from './dashboard/vue/dashboard/dashboard.component';
import { RoomCreateComponent } from './rooms/vue/room-create/room-create.component';
import { BookingCreateComponent } from './bookings/vue/booking-create/booking-create.component';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
