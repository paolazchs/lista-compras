import { Component } from '@angular/core';
import { ItemLista } from './itemlista';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.html',
})


export class Lista {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id =  this.lista.length + 1;

    this.lista.push(itemLista);

    this.item = '';

    console.table(this.lista);
  }

  riscarItem( itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista( ){
    this.lista = [];
  }

}

