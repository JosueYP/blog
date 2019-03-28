import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MainModule } from './modulos/main/main.module';
import { AuthService } from './servicios/auth.service';



@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      MainModule,
      CommonModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
