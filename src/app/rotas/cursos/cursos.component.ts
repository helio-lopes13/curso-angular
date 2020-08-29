import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private service: CursosService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.service.getCursos();
    this.inscricao =this.activeRoute.queryParams.subscribe(
      (data) => {
        this.pagina = data['pagina'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.route.navigate(
      ['/cursos'],
      {
        queryParams: {
          'pagina': ++this.pagina
        }
      } 
    );
  }

}
