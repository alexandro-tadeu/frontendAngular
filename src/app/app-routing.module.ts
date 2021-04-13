
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastratarProdutoComponent } from './components/produtos/cadastratar-produto/cadastratar-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { HomeComponent } from './components/home/home.component';

import { AtualizarProdutoComponent } from './components/produtos/atualizar-produto/atualizar-produto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ListarProdutosComponent },
  {path: 'produtos/cadastrar', component: CadastratarProdutoComponent },
  {path: 'produtos/atualizar/:id', component: AtualizarProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
