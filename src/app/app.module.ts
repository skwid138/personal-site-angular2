import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

// flex
import { FlexLayoutModule } from '@angular/flex-layout';

// import http module for making requests to server
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
