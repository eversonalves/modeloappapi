import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-endereco-add',
  templateUrl: './endereco-add.page.html',
  styleUrls: ['./endereco-add.page.scss'],
  standalone: false
})
export class EnderecoAddPage implements OnInit {

  form! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
      tipo_endereco: ['', Validators.required]
    });
  }

  salvar(){
    const request = {
      requisicao: 'endereco-add',
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res:any) => {
      this.menssagem(res.msg);
      if(res.success){
        this.form.reset();
      }
    })
  }

  async menssagem(msg: string){
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'top',
    })
  }
  
}
