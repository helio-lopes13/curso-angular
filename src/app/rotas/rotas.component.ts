import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.component.html',
  styleUrls: ['./rotas.component.css']
})
export class RotasComponent implements OnInit {
  
  mostrarMenu: boolean = false;

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => {
        this.mostrarMenu = mostrar;
      }
    );
  }
}
