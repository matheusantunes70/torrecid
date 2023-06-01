import { FuncionariosService } from './../services/funcionarios.service';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioResolver implements Resolve<Funcionario> {

  constructor(private service: FuncionariosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Funcionario> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ nome: '', sobrenome: '', email: '', profissao: '', idade: '', id: ''});
  }
}
