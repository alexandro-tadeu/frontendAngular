import { ClientesService } from './../../../services/clientes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/model/ICliente.model';



@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})



export class CadastrarClienteComponent implements OnInit {
  cliente: ICliente = {
    nome: null,
    dataNasc: null,
    sexo: null,
  };
  constructor(private ClientesService: ClientesService, private router: Router) {}

  ngOnInit(): void {}

  salvarCliente(): void {
    this.ClientesService.cadastrar(this.cliente).subscribe((retorno) => {
      this.cliente = retorno;
      this.ClientesService.exibirMensagem('SISTEMA',`${this.cliente.nome} foi cadastrado com sucesso!. ID: ${this.cliente.id} `,
      'toast-success'
      );
      this.router.navigate(['/clientes']);
    });
  }
}
