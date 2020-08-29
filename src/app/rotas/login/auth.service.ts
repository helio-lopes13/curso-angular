import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from './usuario.model';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  mostrarMenuEmitter = new EventEmitter<boolean>();
  private usuarioAutenticado: boolean = false;

  constructor(private route: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'usuario@email.com' &&
      usuario.senha == '123456'
    ) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.route.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  
  getUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
  
}
