import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FuncionariosComponent } from './containers/funcionarios/funcionarios.component';
import { FuncionariosListComponent } from './components/funcionarios-list/funcionarios-list.component';
import { FuncionarioFormComponent } from './containers/funcionario-form/funcionario-form.component';
import { funcionariosRoutingModule } from './funcionarios-routing.module';




@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionariosListComponent
  ],
  imports: [
    CommonModule,
    funcionariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
