import { ClientesService } from './../../../services/clientes.service';
import { ICliente } from './../../../model/ICliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-atualizar-cliente',
  templateUrl: './atualizar-cliente.component.html',
  styleUrls: ['./atualizar-cliente.component.css']
})



export class AtualizarClienteComponent implements OnInit {
  cliente: ICliente = {
    nome: null,
    dataNasc: null,
    sexo: null,
  };
  constructor(
    private ClientesService: ClientesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.ClientesService.buscarPorId(id).subscribe((retorno) => {
      this.cliente = retorno;
    });
  }

  salvarCliente(): void {
    this.ClientesService.atualizar(this.cliente).subscribe((retorno) => {
      this.cliente = retorno;
      this.ClientesService.exibirMensagem(
        'SISTEMA',
        `${this.cliente.nome} foi atualizado com sucesso!.`,
        'toast-success'
      );
      this.router.navigate(['/clientes']);
    });
  }
}
