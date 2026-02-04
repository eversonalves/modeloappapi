import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone: false,
})
export class ProdutoListPage implements OnInit {
  pedido: any = null;
  mensagem = '';

  constructor(private api: Vendas) {}

  ngOnInit() {}

  // Listar pedidos

  async Listar() {
    const pedidosListar = {
      requisicao: 'pedido-listar',
      id_pedido: 100050,
    };

    const resposta: any = await lastValueFrom(this.api.operacao(pedidosListar));
    this.mensagem = resposta.msg;
    this.pedido = resposta.data[0];

    console.log(this.pedido);
  }
}
