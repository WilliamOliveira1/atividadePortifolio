import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-child',
  templateUrl: './title-child.component.html',
  styleUrls: ['./title-child.component.css']
})
export class TitleChildComponent implements OnInit {
  @Input() receiveName;
  @Output() nameFather = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.nameFather.emit('William Oliveira');
  }
}
