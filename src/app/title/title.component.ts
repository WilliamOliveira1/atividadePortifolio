import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Output() nameFather = 'William Oliveira';

  constructor() { }

  ngOnInit(): void {
  }

}
