import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
  standalone: false
})
export class UsuarioListPage implements OnInit {

  usuarios : any [] = [];
  start: number = 0;
  limit: number = 20;
  palavra: any;

  constructor(
    private api: Vendas,
    private router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  ionViewWillEnter(){
    this.listar();
  }

  listar(id:number=0, event?:any, atualizar: boolean=false){

    if(atualizar){
      this.start = 0;
      this.usuarios = [];
    }

    this.api.operacao({requisicao: 'usuario-listar', limit: this.limit, start: this.start, nome: this.palavra}).subscribe(
      (res:any)=> {
        if (res.success){
          this.usuarios = [...this.usuarios, ...res.data];
          this.start += this.limit
        }
        event.target.complete();
        if(res.data.length < this.limit && event?.disabled !=== undefined){
          event.target.disabled = true;
        }
      }
    );
  }

 // função barra de pesquisa
  buscar(event:any){
    this.palavra = event.target.value.toLowerCase();
    this.listar();
  }

  editar(id:number){
    this.router.navigate(['/usuario-edit', id]);
  }

}
