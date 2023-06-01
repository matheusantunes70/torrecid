import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionariosComponent } from './containers/funcionarios/funcionarios.component';
import { FuncionarioFormComponent } from './containers/funcionario-form/funcionario-form.component';
import { FuncionarioResolver } from './guards/funcionario.resolver';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'new', component: FuncionarioFormComponent, resolve: { funcionario: FuncionarioResolver } },
  { path: 'edit/:id', component: FuncionarioFormComponent, resolve: { funcionario: FuncionarioResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class funcionariosRoutingModule { }
