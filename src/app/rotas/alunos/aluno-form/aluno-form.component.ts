import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { FormCanDeactivate } from '../../guards/form-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, FormCanDeactivate {

  aluno: any = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private service: AlunosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (data)  => {
        let id = data['id'];
        this.aluno = this.service.getAluno(id);

        if (this.aluno === null) {
          this.aluno = {};
        }

      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {

    if (this.formMudou) {
      confirm('Tem certeza que deseja mudar de rota?');
    }

    return true;

  }

  podeDesativar() {
    return this.podeMudarRota();
  }

}
