import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './vue/login/login.component';
import { RegisterComponent } from './vue/register/register.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './data/services/auth.service';
import { AuthDisplayService } from './data/facades/auth-display.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forFeature(DataService),
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthDisplayService
  ],
})
export class AuthModule { }
