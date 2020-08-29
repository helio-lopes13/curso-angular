import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: CursosService,
    private router: Router
  ) {
    // console.log(activeRoute);
  }
  
  ngOnInit(): void {
    this.inscricao = this.activeRoute.params.subscribe(
      (data: any) => {
        this.id = data['id'];
    });
    this.curso = this.service.getCurso(this.id);

    if (!this.curso) {
      this.router.navigate(['cursos/naoEncontrado']);
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  } 

}
