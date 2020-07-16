import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cursos: string [] = [];
  cursosService: LoggerService;
  dataAtual;

  constructor(cursosService: LoggerService) {
    this.cursosService = cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.dataAtual =  new Date();
  }
}
