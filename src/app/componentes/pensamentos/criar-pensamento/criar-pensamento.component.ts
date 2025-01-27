import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { smallCharactersValidator } from 'src/app/compartilhado/validators/smallCharactersValidator';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private _service: PensamentoService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3),smallCharactersValidator]),
      ],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this._service.criar(this.formulario.value).subscribe(() => {
        this._router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar() {
    this._router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    let estiloBotao;

    if (this.formulario.valid) {
      estiloBotao = 'botao';
    }else{
      estiloBotao = 'botao__desabilitado';
    }

    return estiloBotao;
  }
}
