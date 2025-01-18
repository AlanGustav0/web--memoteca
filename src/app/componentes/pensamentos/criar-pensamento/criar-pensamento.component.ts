import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private _service: PensamentoService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      conteudo:['Formulario Reativo'],
      autoria:['Angular'],
      modelo:['modelo1']
    });
  }

  criarPensamento() {
    this._service.criar(this.formulario.value).subscribe(() => {
      this._router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this._router.navigate(['/listarPensamento'])
  }

}
