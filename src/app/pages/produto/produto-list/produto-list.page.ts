import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone: false,
})
export class ProdutoListPage implements OnInit {

  produtos: any [] = [];
  start: number = 0; // Inicio da busca de produtos.
  limit: number = 20; // Limite que é exibido de produto na pagina.
  palavra: any;

  constructor(
    private api: Vendas,
    private router: Router
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar(event?:any, atualizar: boolean=false) {
    // Se for um refresh, a gente reseta o contador e a lista.
    if(atualizar){
      this.start = 0;
      this.produtos = [];
    }
    // Passa a quantidade de linhas que sera exibida no lista.
    this.api.operacao({requisicao:'produto-listar', limit: this.limit, start: this.start, nome: this.palavra}).subscribe((res:any)=>{
      if(res.success){
        // aqui vamos acrescenta os novos itens aos existentes.
        this.produtos = [...this.produtos, ...res.data];
        // pro fim incrementa o start para o proximo carregamento.
        this.start += this.limit
      }
      // finaliza a animação do componente que disparou o evento.
      event.target.complete();
      // desativa o infinite scroll se não ouver mais dados para ser exibidos.
      if(res.data.length < this.limit && event?.target?.disabled !== undefined){
        event.target.disabled = true;
        // adicione um toast para ser exibida quando não ouver mais produtos.
      }
    });
  }

  // puxar para atualizar (reseta a lista)
  atualizar(event:any){
    this.listar(event, true);
  }

  // scroll infinito (carrega mais)
  carregaMais(event:any){
    this.listar(event, false);
  }

  abrirDetalhes(id:number){
    this.router.navigate(['/produto-detalhe', id]);
  }

  abrirImagem(id:number){
    this.router.navigate(['/produto-imagem', id]);
  }
  
}
