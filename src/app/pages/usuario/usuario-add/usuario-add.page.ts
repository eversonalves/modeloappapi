import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
  standalone: false
})
export class UsuarioAddPage implements OnInit {

  form! : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() { // Quando a página for carregada ele roda esté ngOnInit, ele é parte do clico de vida do app Ionic.
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      id_nivel: ['', Validators.required]
    });
  }

  salvar(){
    const request = {
      requisicao: 'usuario-add',
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res:any) => {
      this.mensagem(res.msg);
      if(res.success){
        this.form.reset();
      }
    });
  }

  async mensagem(msg: string){
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    t.present();
  }

}
