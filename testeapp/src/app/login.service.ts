import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, 
 RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
 providedIn: 'root'
})
export class LoginService implements CanActivate{
 private usuarios = [
 new Usuario("admin","1234","Administrador","admin@rafa.com"),
 new Usuario("rafa","1234","rafael altero","ana@rafa.com"),
 new Usuario("luiz","1234","Luiz Carlos","luiz@rafa.com")]

 router: Router;
 isAuthenticated: boolean = false;
 usuarioLogado: Usuario = new Usuario();

 constructor(router: Router) { this.router = router; }

 canActivate(route: ActivatedRouteSnapshot, 
 state: RouterStateSnapshot): 
 boolean | UrlTree | Observable<boolean | UrlTree> | 
 Promise<boolean | UrlTree> {
 if(!this.isAuthenticated)
 return this.router.parseUrl("/login");
 else
 return true;
 }
 signin(login: string, senha: string): boolean {
 let usuario = this.usuarios.filter((value)=>
 value.login==login).pop();
 if((usuario!=null)&&(usuario.senha==senha)){
 this.usuarioLogado = usuario;
 this.isAuthenticated = true;
 return true;
 } else {
 return false;
 }
 }
 signout(){
 this.usuarioLogado = new Usuario();
 this.isAuthenticated = false;
 }
}
