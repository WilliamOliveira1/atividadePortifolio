import {Component, OnInit, Output} from '@angular/core';
import {LoggerService} from '../logger.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cursos: string [] = [];
  cursoDigitado;


  constructor(private cursosService: LoggerService ) {
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.cursosService.emitirCursoCriado.subscribe(
    );
  }
  // tslint:disable-next-line:typedef
  onAddCurso(curso: string) {
    if (this.cursoDigitado){
      this.cursosService.addCurso(curso);
    }
  }

}
