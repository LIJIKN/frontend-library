import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url= "./assets/images/image/img5.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
