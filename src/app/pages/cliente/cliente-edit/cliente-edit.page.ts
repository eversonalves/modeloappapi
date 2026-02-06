import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.page.html',
  styleUrls: ['./cliente-edit.page.scss'],
  standalone: false
})
export class ClienteEditPage implements OnInit {

  form!: FormGroup;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private api: Vendas,
    private router: Router,
    private toast: ToastController,
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      datanasc: ['', Validators.required],
    });
  }

    salvar() {
    const request = {
      requisicao: 'cliente-editar',
      id_cliente: this.id,
      ...this.form.value,
    };
    this.api.operacao(request).subscribe((res: any) => {
      this.mensagem(res.msg);
      this.router.navigateByUrl('/cliente-list');
    });
  }

    carregar() {
    this.api
      .operacao({
        resquisicao: 'cliente-listar',
        id_cliente: this.id,
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.form.patchValue({
            nome: res.data.nome,
            datanasc: res.data.data_nasc,
          });
        }
      });
  }

    async mensagem(msg: string) {
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
  }

}
