import { ICliente } from './../model/ICliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private URL: string = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  buscarTodos(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.URL).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }
  cadastrar(Cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.URL, Cliente).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  atualizar(Cliente: ICliente): Observable<ICliente> {
    return this.http.put<ICliente>(`${this.URL}/${Cliente.id}`, Cliente).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  excluir(id:number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  exibirErro(e: any): Observable<any> {
    this.exibirMensagem(
      'ERRO!',
      'Não foi possivel realizar essa operação!',
      'toast-error'
    );
    return EMPTY;
  }
  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }
}
