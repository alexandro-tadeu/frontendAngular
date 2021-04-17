import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastratar-produto',
  templateUrl: './cadastratar-produto.component.html',
  styleUrls: ['./cadastratar-produto.component.css'],
})
export class CadastratarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null,
  };
  constructor(private ProdutosService: ProdutosService, private router: Router) {}

  ngOnInit(): void {}

  salvarProduto(): void {
    this.ProdutosService.cadastrar(this.produto).subscribe((retorno) => {
      this.produto = retorno;
      this.ProdutosService.exibirMensagem('SISTEMA',`${this.produto.nome} foi cadastrado com sucesso!. ID: ${this.produto.id} `,
      'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
