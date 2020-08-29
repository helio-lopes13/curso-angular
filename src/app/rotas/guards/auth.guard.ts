import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private auth: AuthService,
    private route: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivate: AuthGuard');
    return this.verificarAcesso();
  }
  
  private verificarAcesso() {
    if (this.auth.getUsuarioAutenticado()) {
      return true;
    }
    
    this.route.navigate(['/login']);
    return false;
  }
  
  canLoad(route: Route) {
    console.log('canLoad: AuthGuard');
    
    return this.verificarAcesso();
  }
  
}
