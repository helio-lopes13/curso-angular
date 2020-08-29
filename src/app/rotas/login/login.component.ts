import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from "./usuario.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    // console.log(this.usuario);
    
    this.auth.fazerLogin(this.usuario);
  }

  getUsuario() {
    return this.usuario;
  }

}
