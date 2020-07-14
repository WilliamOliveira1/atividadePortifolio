import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

  nomeDigitado;
  @Output() emails;
  name;




  inserirEmail() {
    if (this.nomeDigitado){
      if(this.nomeDigitado != this.emails.index) {
        this.emails.push({name: this.nomeDigitado});
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.emails= [];
    for (let i=0; i<this.emails.length; i++) {
      let curso =this.emails[i];
    }
  }

}
