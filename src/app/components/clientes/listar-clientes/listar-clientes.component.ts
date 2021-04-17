
import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  listaClientes: ICliente[] = [];

  constructor(private ClientesService:ClientesService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.ClientesService.buscarTodos().subscribe((retorno) => {
      this.listaClientes = retorno;
    });
  }

  deletar(cliente: ICliente): void {
    this.ClientesService.excluir(cliente.id).subscribe(() => {
      this.ClientesService.exibirMensagem(
        'SISTEMA',
        `${cliente.nome} foi excluido com sucesso`,
        'toast-error'
      );
      this.carregarClientes();
    });
  }
}
