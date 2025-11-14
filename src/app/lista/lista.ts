import { Component } from '@angular/core';
import { ItemLista } from './itemlista';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-lista',
  imports: [ FormsModule],
  templateUrl: './lista.html',
})


export class Lista {

  item: string = '';
  lista: ItemLista[] = [];

  adicionarItem() {
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id =  this.lista.length + 1;
    itemLista.comprado;

    this.lista.push(itemLista);

    this.item = '';

    console.table(this.lista);

  }

}
