import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
  standalone: false
})
export class ClienteAddPage implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      datanasc: ['', Validators.required]
    });
  }

  salvarCliente(){
    const request = {
      requisicao: 'cliente-add',
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
