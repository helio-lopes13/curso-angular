import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    // this.cursosService = cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
