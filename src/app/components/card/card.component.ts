import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.onClick.emit(true);
  }
}
