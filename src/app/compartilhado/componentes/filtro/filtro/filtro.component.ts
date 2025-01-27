import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {

  filtro:string = '';
  @Output() filtroEmitter = new EventEmitter<string>();

  carregarFiltro(){
    this.filtroEmitter.emit(this.filtro);
  }

}
