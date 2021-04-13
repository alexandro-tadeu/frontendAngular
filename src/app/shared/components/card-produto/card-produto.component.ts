import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css'],
})
export class CardProdutoComponent implements OnInit {
  @Input() foto: String;
  @Input() nomeProduto: String;
  @Input() promocao: boolean;
  @Input() idProduto: number;
  @Input() dataValidade: String;
  @Input() precoProduto: number;

  constructor() {}

  ngOnInit(): void {}
}
