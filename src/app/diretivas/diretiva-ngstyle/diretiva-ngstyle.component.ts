import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFonte: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
