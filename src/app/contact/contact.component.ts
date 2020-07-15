import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  nomeDigitado;
  emails;
  name;

  // tslint:disable-next-line:typedef
  inserirEmail(){
    if (this.nomeDigitado){
      if (this.nomeDigitado !== this.emails.index) {
        this.emails.push({name: this.nomeDigitado});
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.emails = [];
    for (const value of this.emails) {
      const curso = this.emails;
    }
  }

  onSubmit() {
    console.log('Submitted!');
  }

}
