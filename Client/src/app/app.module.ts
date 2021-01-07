import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseHttpService, SHARED_SERVICES, SharedModule } from "../app/shared";
import {  Injectable } from '@angular/core'
import * as Hammer from 'hammerjs'; 
import { 
  HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG}  
  from '@angular/platform-browser';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CitiesComponent } from './cities/cities.component'; 

  @Injectable() 
export class MyHammerConfig extends HammerGestureConfig { 
  overrides = <any> { 
    swipe: { direction: Hammer.DIRECTION_ALL }, 
  }; 
} 

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    FavoriteComponent,
    CitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HammerModule ,
    
  ],
  providers: [ { 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig, 
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
