// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/vue/login/login.component';
import { RegisterComponent } from './auth/vue/register/register.component';
import { BookingCreateComponent } from './bookings/vue/booking-create/booking-create.component';
import { BookingDetailComponent } from './bookings/vue/booking-detail/booking-detail.component';
import { BookingsListComponent } from './bookings/vue/bookings-list/bookings-list.component';
import { DashboardComponent } from './dashboard/vue/dashboard/dashboard.component';
import { RoomCreateComponent } from './rooms/vue/room-create/room-create.component';
import { RoomDetailComponent } from './rooms/vue/room-detail/room-detail.component';
import { RoomEditComponent } from './rooms/vue/room-edit/room-edit.component';
import { RoomsListComponent } from './rooms/vue/rooms-list/rooms-list.component';
import { AuthGuard } from './core/domain/auth.guard';

// Importez les composants pour lesquels vous souhaitez définir des routes


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }, // Rediriger vers le tableau de bord par défaut
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rooms', component: RoomsListComponent },
  { path: 'rooms/:id', component: RoomDetailComponent },
  { path: 'rooms/create', component: RoomCreateComponent },
  { path: 'rooms/edit/:id', component: RoomEditComponent },
  { path: 'bookings', component: BookingsListComponent, canActivate: [AuthGuard] },
  { path: 'bookings/:id', component: BookingDetailComponent, canActivate: [AuthGuard]},
  { path: 'bookings/create', component: BookingCreateComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
