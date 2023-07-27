import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/vue/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './core/domain/auth.guard';
import { RoomModule } from './rooms/room.module';

@NgModule({
    declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, 
        AppRoutingModule, 
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        FormsModule,
        AuthModule,
        RoomModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
