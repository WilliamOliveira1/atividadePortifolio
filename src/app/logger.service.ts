import {Injectable, EventEmitter} from '@angular/core';
import {HomeComponent} from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  emitirCursoCriado = new EventEmitter<string>();

  private cursos: string [] = [];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
