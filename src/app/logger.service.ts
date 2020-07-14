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

  // tslint:disable-next-line:typedef
  getCursos() {
    return this.cursos;
  }

  // tslint:disable-next-line:typedef
  addCurso(curso: string){
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
  }

}
