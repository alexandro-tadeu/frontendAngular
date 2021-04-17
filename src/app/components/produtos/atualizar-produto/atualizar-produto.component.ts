import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
})
export class AtualizarProdutoComponent implements OnInit {
  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null,
  };
  constructor(
    private ProdutosService: ProdutosService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.ProdutosService.buscarPorId(id).subscribe((retorno) => {
      this.produto = retorno;
    });
  }

  salvarProduto(): void {
    this.ProdutosService.atualizar(this.produto).subscribe((retorno) => {
      this.produto = retorno;
      this.ProdutosService.exibirMensagem(
        'SISTEMA',
        `${this.produto.nome} foi atualizado com sucesso!.`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }
}
