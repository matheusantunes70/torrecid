import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, first, tap } from 'rxjs/operators';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = 'https://64765197e607ba4797dd947d.mockapi.io/api/v1/funcionarios';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Funcionario[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        // tap(Funcionarios => console.log(Funcionarios))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Funcionario>(`${this.API}/${id}`);
  }

  save(record: Partial<Funcionario>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Funcionario>) {
    return this.httpClient.post<Funcionario>(this.API, record).pipe(first());
  }

  private update(record: Partial<Funcionario>) {
    return this.httpClient.put<Funcionario>(`${this.API}/${record.id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
