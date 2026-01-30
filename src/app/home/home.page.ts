import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  pedido: any = null;
  mensagem = '';

  constructor(private api: Vendas){}

  ngOnInit(){
    this.Listar();
    console.log(this.pedido);
  }

  // Listar pedidos

  async Listar(){ 
    const pedidosListar = {
      requisicao: 'pedido-listar',
      id_pedido: 100050
    }

    const resposta: any = await lastValueFrom(this.api.operacao(pedidosListar));
    this.mensagem = resposta.msg;
    this.pedido = resposta.data[0];

  }

}
