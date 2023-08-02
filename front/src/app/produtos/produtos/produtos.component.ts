import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [

  ]
  displayedColumns = [ 'nome','descricao','tensao','marca']
  constructor(){
    // this.produtos = [];
  };
  ngOnInit(): void {

  }
}
