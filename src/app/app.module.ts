import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatTooltip } from '@angular/material';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltip
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
