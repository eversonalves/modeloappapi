import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.page.html',
  styleUrls: ['./endereco-list.page.scss'],
  standalone: false
})
export class EnderecoListPage implements OnInit {

  enderecos: any [] = [];

  constructor(
    private api: Vendas,
    private router: Router
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.api.operacao({requisicao: 'endereco-listar'}).subscribe(
      (res:any)=>{
        if(res.success){
          this.enderecos = res.data;
        }
      }
    );
  }

}
