import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  list = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(event: any) {
    alert(`Clicked: Event from parent`)
  }
}
