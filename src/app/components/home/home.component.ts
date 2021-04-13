import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${this.nomeProduto} está em promoção!`;
  idProduto: number = 3;
  precoProduto: number = 2.59;
  promocao: boolean = false;
  foto: string = 'assets/img/crud.png';
  dataValidade = '2021-12-31';

  listarStrigs: string[] = ['primeiro', 'segundo', 'terceiro'];
  listaNumero: number[] = [1, 2, 3];

  objetoModelo = {
    nome: 'Alexandro',
    idade: 42,
    altura: 1.88,
    graduado: true,
  };

  listaProdutosHome: any[] = [
    {
      nome: 'Lógica de Programação e Programação Web com PHP do ZERO.',
      preco: 27.9,
      validade: '2021-12-31',
      id: 1,
    },
    {
      nome: 'Programação WEB - Criando meu Primeiro Site',
      preco: 27.9,
      validade: '2021-12-31',
      id: 2,
      promocao: true,
    },
    {
      nome: 'HTML, CSS e PHP - do ZERO Para Iniciantes em Programação Web',
      preco: 27.9,
      validade: '2021-12-31',
      id: 3,
    },
    {
      nome: 'Programação WEB - Site Responsivo com Bootstrap e Jquery',
      preco: 27.9,
      validade: '2021-12-31',
      id: 4,
    },
    {
      nome: 'Introdução ao Laravel',
      preco: 27.9,
      validade: '2021-12-31',
      id: 5,
    },
  ];

  constructor() {
    // Variaveis de string com concatenação
    //this.anuncio = 'O' + this.nomeProduto + 'está em promoção';

    console.log('Nome do produto:', this.nomeProduto);
    console.log('Anuncio:', this.anuncio);
    console.log('Id do produto:', this.idProduto);
    console.log('Preço do produto:', this.precoProduto);
    console.log('Promoção:', this.promocao);
  }

  ngOnInit(): void {}
}
