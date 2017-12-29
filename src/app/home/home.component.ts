import { Component, OnInit } from '@angular/core';
import {  } from '';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   // personal photo location
  photoPath: 'assets/me2.jpg';

  constructor() { }

  ngOnInit() {
  }

}
