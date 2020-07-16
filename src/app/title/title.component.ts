import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  name: string;

  constructor() {
    this.name = 'William Oliveira';
  }

  ngOnInit(): void {
    console.log(this.name);
  }

}
