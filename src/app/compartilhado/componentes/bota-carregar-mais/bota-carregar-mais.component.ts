import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bota-carregar-mais',
  templateUrl: './bota-carregar-mais.component.html',
  styleUrls: ['./bota-carregar-mais.component.css']
})
export class BotaCarregarMaisComponent implements OnInit {
  @Input() haMaisPensamentos:boolean = false;

  ngOnInit(): void {
  }

}
