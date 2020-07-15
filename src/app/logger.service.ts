import {Injectable, EventEmitter} from '@angular/core';
import {HomeComponent} from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  emitirCursoCriado;

  private cursos: string [] = [];

  constructor() {
    console.log('CursosService');
  }

  getCursos(): string[] {
    return this.cursos;
  }

  addCurso(curso: string): void{
    this.cursos.push(curso);
  }

}
