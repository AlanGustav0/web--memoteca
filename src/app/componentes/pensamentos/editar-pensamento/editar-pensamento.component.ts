import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { smallCharactersValidator } from 'src/app/compartilhado/validators/smallCharactersValidator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) { }

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
        });

    if(this.formulario.valid){
      const id = this.route.snapshot.paramMap.get('id')
      this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.formulario.patchValue(pensamento);
      })
    }
  }

  editarPensamento() {
    const pensamento = this.formulario.getRawValue();

    pensamento.id = this.route.snapshot.paramMap.get('id');
    this.service.editar(pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
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
