import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private service: AlunosService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*this.inscricao = this.activeRoute.params.subscribe(
      (data) => {
        let id = data['id'];

        this.aluno = this.service.getAluno(id);
      }
    );*/
    this.inscricao = this.activeRoute.data.subscribe(
      (info: {aluno: Aluno}) => {
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['alunos', this.aluno.id, 'editar']);
  }

}
