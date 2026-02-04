import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendas } from 'src/app/services/vendas';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.page.html',
  styleUrls: ['./usuario-edit.page.scss'],
  standalone: false,
})
export class UsuarioEditPage implements OnInit {
  form!: FormGroup;
  id!: number;
  niveis: any [] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private api: Vendas,
    private router: Router,
    private toast: ToastController,
  ) {}

  ngOnInit() {
    // Recuperando o id de usuário que veio pela roda.
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', Validators.required],
      nivel: ['', Validators.required],
    });
    this.carregar();

    // Carregar niveis

    this.listarNiveis();

  }

  carregar() {
    this.api
      .operacao({
        resquisicao: 'usuario-listar',
        id_usuario: this.id,
      })
      .subscribe((res: any) => {
        if (res.success) {
          this.form.patchValue({
            nome: res.data.nome,
            nivel: res.data.nivel_id,
          });
        }
      });
  }

  salvar() {
    const request = {
      requisicao: 'usuario-editar',
      id_usuario: this.id,
      ...this.form.value,
    };
    this.api.operacao(request).subscribe((res: any) => {
      this.mensagem(res.msg);
      this.router.navigateByUrl('/usuario-list');
    });
  }

  async mensagem(msg: string) {
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
  }

  listarNiveis(){
        this.api.operacao({
      requisicao: 'nivel-listar'
    }).subscribe((res:any)=>{
      if (res.success){
        this.niveis = res.data;
      }
    });
  }
}
