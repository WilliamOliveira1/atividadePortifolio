import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-child',
  templateUrl: './title-child.component.html',
  styleUrls: ['./title-child.component.css']
})
export class TitleChildComponent implements OnInit {
  @Input() nameChild: string;

  constructor() { }

  ngOnInit(): void {
  }

}
