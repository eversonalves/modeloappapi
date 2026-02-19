import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = "https://sublimegrace.com.br/modelo-api";

  constructor(private http: HttpClient){}

 // Saída para o primeiro end-point

 operacao(dados:any){  
  return this.http.post(this.url + '/api.php', dados);
 }


 // Upload de imagem.

  uploadImagem(idProduto: number, arquivo: File){  
    const formData = new FormData();
    formData.append('requisicao','produto-upload-imagem');
    formData.append('id_produto', idProduto.toString());
    formData.append('imagem', arquivo)

    return this.http.post(this.url + '/api-php', formData);

  } 

 // Exemplo de como consumir a api com arquivos separados.

 // listarPorduto(dados:any){
 //  return this.http.post(this.url + 'api-produtos', dados);
 // }

 // Exemplo de como consumir a api com arquivos separados.

 // listarAlterar(dados:any){  
 //  return this.http.post(this.url + 'api-produtos/{id}', dados);
 // }

}
