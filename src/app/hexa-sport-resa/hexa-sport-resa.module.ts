import { NgModule } from '@angular/core';
import { LoginComponent } from './vue/dumb/login/login.component';
import { RegisterComponent } from './vue/dumb/register/register.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './vue/dumb/login/login.module';
import { SmartComponent } from './vue/smart/smart.component';


@NgModule({
    declarations: [
        SmartComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        LoginModule
    ], 
    exports: [
        LoginModule
    ]
})
export class HexaSportResaModule {}